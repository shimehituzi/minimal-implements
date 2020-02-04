import React from 'react'

interface OwnProps {
  gameTypedText: string
  gameRemainingText: string
}

interface Handler {
  handleSetGameTypedText: (newTypedText: string) => (void)
  handleSetGameRemainingText: (newRemainingText: string) => (void)
}

type Props = OwnProps & Handler

export const Game: React.FC<Props> = props => {
  const gameNextChar = props.gameRemainingText.substring(0, 1)
  const gameQueueText = props.gameRemainingText.substring(1)

  const isEnter = (e: React.KeyboardEvent) => {
    return (e.key === 'Enter' && gameNextChar === '\n')
  }

  const isTab = (e: React.KeyboardEvent) => {
    return (e.key === 'Tab' && gameNextChar === ' ')
  }

  const spaceCounter = (text: string, count: number): number => {
    if (count >= 64) return count
    if (text.substring(0, 1) === ' ') {
      return spaceCounter(text.substring(1), count + 1)
    } else {
      return count
    }
  }

  const onKeyEventFunc = (e: React.KeyboardEvent<HTMLPreElement>) => {
    if (e.key === gameNextChar || isEnter(e) || isTab(e)) {
      e.preventDefault()
      if (e.key.match(/^.$/) !== null) {
        props.handleSetGameTypedText(props.gameTypedText + e.key)
        props.handleSetGameRemainingText(gameQueueText)
      } else if (e.key === 'Enter') {
        props.handleSetGameTypedText(props.gameTypedText + '\n')
        props.handleSetGameRemainingText(gameQueueText)
      } else if (e.key === 'Tab') {
        const count = spaceCounter(props.gameRemainingText, 0)
        if (count >= 2) {
          props.handleSetGameTypedText(props.gameTypedText + ' '.repeat(count))
          props.handleSetGameRemainingText(props.gameRemainingText.substring(count))
        }
      }
    }
  }

  const cursorView = gameNextChar !== '\n' ? gameNextChar : '⏎\n'

  return (
    <pre tabIndex={0} onKeyDown={onKeyEventFunc} style={{ backgroundColor: '#455a64', fontSize: '35px' }}>
      <span style={{ color: 'white' }}>{props.gameTypedText}</span>
      <span style={{ color: 'black', background: 'yellow' }}>{cursorView}</span>
      <span style={{ color: 'gray' }}>{gameQueueText}</span>
    </pre>
  )
}
