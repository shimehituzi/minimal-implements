import React from 'react'

interface OwnProps {
  typedCode: string
  remainingCode: string
}

interface Handler {
  handleSetTypedCode: (typedCode: string) => (void)
  handleSetRemainingCode: (remainingCode: string) => (void)
}

type Props = OwnProps & Handler

export const Game: React.FC<Props> = props => {
  const nextChar = props.remainingCode.substring(0, 1)
  const queueText = props.remainingCode.substring(1)

  const isEnter = (e: React.KeyboardEvent) => {
    return (e.key === 'Enter' && nextChar === '\n')
  }

  const isTab = (e: React.KeyboardEvent) => {
    return (e.key === 'Tab' && nextChar === ' ')
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
    if (e.key === nextChar || isEnter(e) || isTab(e)) {
      e.preventDefault()
      if (e.key.match(/^.$/) !== null) {
        props.handleSetTypedCode(props.typedCode + e.key)
        props.handleSetRemainingCode(queueText)
      } else if (e.key === 'Enter') {
        props.handleSetTypedCode(props.typedCode + '\n')
        props.handleSetRemainingCode(queueText)
      } else if (e.key === 'Tab') {
        const count = spaceCounter(props.remainingCode, 0)
        if (count >= 2) {
          props.handleSetTypedCode(props.typedCode + ' '.repeat(count))
          props.handleSetRemainingCode(props.remainingCode.substring(count))
        }
      }
    }
  }

  const cursorView = nextChar !== '\n' ? nextChar : '⏎\n'

  const preStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'top',
    outline: 'none'
  }

  return (
    <pre tabIndex={0} onKeyDown={onKeyEventFunc} style={preStyle}>
      <span style={{ color: 'white' }}>{props.typedCode}</span>
      <span style={{ color: 'black', background: 'yellow' }}>{cursorView}</span>
      <span style={{ color: 'gray' }}>{queueText}</span>
    </pre>
  )
}
