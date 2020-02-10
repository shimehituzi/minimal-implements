import React from 'react'
import { Code } from './Code'
import { CodeComment } from './CodeComment'
import { State } from '../../State'

type OwnProps = {
  code: State['gameForm']['code']
  codeComment: State['gameForm']['codeComment']
  cursorPos: State['gameData']['cursorPos']
  gameOver: State['gameData']['gameOver']
}

type Handler = {
  handleSetCursorPos: (
    (cursorPos: State['gameData']['cursorPos']) => void
  )
  handleSetGameOver: (
    (gameOver: State['gameData']['gameOver']) => void
  )
}

type Props = OwnProps & Handler

export const Game: React.FC<Props> = props => {
  const divStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '100%',
    verticalAlign: 'top',
    backgroundColor: '#455a64',
    fontSize: 20,
    padding: 20,
  }

  return (
    <div style={divStyle}>
      <Code 
        code={props.code}
        cursorPos={props.cursorPos}
        gameOver={props.gameOver}
        handleSetCursorPos={props.handleSetCursorPos}
        handleSetGameOver={props.handleSetGameOver}
      />
      <CodeComment 
        codeComment={props.codeComment}
        typingRow={props.cursorPos.row}
        gameOver={props.gameOver}
      />
    </div>
  )
}
