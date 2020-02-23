import React from 'react'
import { State } from '../../State'

type Alias = {
  codeComment: State['gameParams']['game']['codeComment']
  typingRow: State['gameParams']['params']['cursorPos']['row']
  gameOver: State['gameParams']['params']['gameOver']
}

type OwnProps = {
  codeComment: Alias['codeComment']
  typingRow: Alias['typingRow']
  gameOver: Alias['gameOver']
}

type Props = OwnProps

export const CodeComment: React.FC<Props> = props => {
  const preStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'top',
    color: 'gray',
  }

  const styleNum: React.CSSProperties = {
    display: 'inline-block',
    textAlign: 'right',
    minWidth: '60px',
    color: '#607D8B'
  }

  const typingRowStyle = (index: number):React.CSSProperties => {
    if (!props.gameOver) {
      if (props.typingRow === index) {
        return { color: 'white' }
      } else {
        return {}
      }
    } else {
      return { color: 'white' }
    }
  }

  const jsxElem = (cr: string, line: string, index: number) => (
    <React.Fragment key={index}>
      <span style={styleNum}>{1 + index + "   "}</span>
      <span style={typingRowStyle(index)}>{line + cr}</span>
    </React.Fragment>
  )

  const mappingFunc = (line: string, index: number, arr: string[]) => {
    return arr.length-1 === index ? jsxElem('', line, index) : jsxElem('\n', line, index)
  }

  return (
    <pre style={preStyle}>
      { props.codeComment.map((v, i, a) => mappingFunc(v, i, a)) }
    </pre>
  )
}
