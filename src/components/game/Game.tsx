import React from 'react'
import { AppState } from '../../Store'

interface OwnProps {
  typingCode: string[]
  cursorPos: AppState['state']['game']['cursorPos']
}

interface Handler {
  handleSetCursorPos: Function
}

type Props = OwnProps & Handler

export const Game: React.FC<Props> = props => {
  const preStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'top',
    outline: 'none'
  }

  const mappingFunc = (line:string, index:number, arr:string[]) => {
    if ( arr.length - 1 === index ) {
      return <span style={{color: 'gray'}} key={index}>{line}</span> 
    } else {
      return <span style={{color: 'gray'}} key={index}>{line + '\n'}</span> 
    }
  }

  return (
    <pre tabIndex={0} style={preStyle}>
      { props.typingCode.map((v, i, a) => mappingFunc(v, i, a)) }
    </pre>
  )
}
