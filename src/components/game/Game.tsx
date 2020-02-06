import React from 'react'
import { AppState } from '../../Store'

interface OwnProps {
  typingCode: string[]
  cursorPos: AppState['state']['game']['cursorPos']
  gameOver: boolean
}

interface Handler {
  handleSetCursorPos: Function
  handleSetGameOver: Function
}

type Props = OwnProps & Handler

export const Game: React.FC<Props> = props => {
  const getCursorChar = () => (
    props.typingCode[props.cursorPos.row].slice(props.cursorPos.col, props.cursorPos.col+1)
  )

  const isEnter = (e: React.KeyboardEvent, cursorChar: string) => {
    return (e.key === 'Enter' && cursorChar === '')
  }

  // const isTab = (e: React.KeyboardEvent, cursorChar: string) => {
  //   return (e.key === 'Tab' && cursorChar === ' ')
  // }

  // const spaceCounter = (text: string, count: number): number => {
  //   if (count >= 64) return count
  //   if (text.slice(0, 1) === ' ') {
  //     return spaceCounter(text.slice(1), count + 1)
  //   } else {
  //     return count
  //   }
  // }

  const isGameOver = () => (
    props.cursorPos.row === props.typingCode.length-1 && props.cursorPos.col === props.typingCode.slice(-1)[0].length-1
  )

  const onSetCursorPosFunc = (e: React.KeyboardEvent<HTMLPreElement>) => {
    if (!props.gameOver) {
      const cursorChar = getCursorChar()
      // if (e.key === cursorChar || isEnter(e, cursorChar) || isTab(e, cursorChar)) {
      if (e.key === cursorChar || isEnter(e, cursorChar) ) {
        e.preventDefault()
        if (e.key.match(/^[\x20-\x7e]$/) !== null) {
          props.handleSetCursorPos({
            row: props.cursorPos.row,
            col: props.cursorPos.col+1
          })
        } else if (e.key === 'Enter') {
          props.handleSetCursorPos({
            row: props.cursorPos.row+1,
            col: 0
          })
        // } else if (e.key === 'Tab') {
        //   props.handleSetCursorPos({
        //     row: props.cursorPos.row + count,
        //     col: props.cursorPos.col
        //   })
        }
        if (isGameOver()) {
          props.handleSetGameOver(true)
          alert('Finish')
        }
      }
    }
  }

  const preStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'top',
    outline: 'none'
  }

  const styleNum: React.CSSProperties = {
    display: 'inline-block',
    textAlign: 'right',
    minWidth: '60px',
    color: 'gray'
  }

  const jsxElem = (cr: string, line: string, index: number) => (
    <React.Fragment key={index}>
      <span style={styleNum}>{1 + index + "   "}</span>
      <span>{line + cr}</span>
    </React.Fragment>
  )

  const mappingFunc = (line: string, index: number, arr: string[]) => {
    return arr.length-1 === index ? jsxElem('', line, index) : jsxElem('\n', line, index)
  }

  return (
    <pre tabIndex={0} style={preStyle} onKeyDown={onSetCursorPosFunc}>
      { props.typingCode.map((v, i, a) => mappingFunc(v, i, a)) }
    </pre>
  )
}
