import React from 'react'
import { State } from '../../State'

type Alias = {
  code: State['games']['games'][0]['code']
  cursorPos: State['gameParams']['game']['cursorPos']
  gameOver: State['gameParams']['game']['gameOver']
}

type OwnProps = {
  code: Alias['code']
  cursorPos: Alias['cursorPos']
  gameOver: Alias['gameOver']
}

type Handler = {
  handleSetCursorPos: (
    (cursorPos: Alias['cursorPos']) => void
  )
  handleSetGameOver: (
    (gameOver: Alias['gameOver']) => void
  )
}

type Props = OwnProps & Handler

export const Code: React.FC<Props> = props => {
  const getCursorChar = () => (
    props.code[props.cursorPos.row].slice(props.cursorPos.col, props.cursorPos.col+1)
  )

  const isEnter = (e: React.KeyboardEvent, cursorChar: string) => {
    return (e.key === 'Enter' && cursorChar === '')
  }

  const lastLineEmpty = props.code.slice(-1)[0] === ''

  const lastline = {
    row: props.code.length-1, 
    col: props.code.slice(-1)[0].length-1
  }

  const isGameOver = () => (
    props.cursorPos.row === lastline.row && props.cursorPos.col === lastline.col
  )

  const onSetCursorPosFunc = (e: React.KeyboardEvent<HTMLPreElement>) => {
    if (!props.gameOver) {
      const cursorChar = getCursorChar()
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
          if (lastLineEmpty && props.cursorPos.row === lastline.row -1) {
            props.handleSetGameOver(true)
            alert('Finish')
          }
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
    color: '#607D8B'
  }

  const jsxElem = (last: boolean, line: string, index: number) => {
    const row = props.cursorPos.row
    const col = props.cursorPos.col
    if (row > index) {
      return (
        <React.Fragment key={index}>
          <span style={styleNum}>{1 + index + "   "}</span>
          <span style={{color: 'white'}}>{line}</span>
          <span>{last ? '' : '\n'}</span>
        </React.Fragment>
      )
    } else if( row === index ) {
      const beforeWords = line.slice(0, col)
      const maybeCC = line.slice(col, col+1)
      const cursorChar = maybeCC === "" && !last ? '↵' : maybeCC
      const afterWords = line.slice(col+1)
      return (
        <React.Fragment key={index}>
          <span style={styleNum}>{1 + index + "   "}</span>
          <span style={{color: 'white'}}>{beforeWords}</span>
          <span style={{color: 'black', background: 'yellow'}}>{cursorChar}</span>
          <span style={{color: 'gray'}}>{afterWords}</span>
          <span>{last ? '' : '\n'}</span>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment key={index}>
          <span style={styleNum}>{1 + index + "   "}</span>
          <span style={{color: 'gray'}}>{line}</span>
          <span>{last ? '' : '\n'}</span>
        </React.Fragment>
      )
    }
  }

  const mappingFunc = (line: string, index: number, arr: string[]) => {
    return arr.length-1 === index ? jsxElem(true, line, index) : jsxElem(false, line, index)
  }

  return (
    <pre tabIndex={0} style={preStyle} onKeyDown={onSetCursorPosFunc}>
      { props.code.map((v, i, a) => mappingFunc(v, i, a)) }
    </pre>
  )
}
