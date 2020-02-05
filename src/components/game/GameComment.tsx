import React from 'react'

interface OwnProps {
  codeComment: string[]
}

type Props = OwnProps

export const GameComment: React.FC<Props> = props => {
  const preStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'top',
    color: 'white',
  }

  const mappingFunc = (line:string, index:number, arr:string[]) => {
    if ( arr.length - 1 === index ) {
      return (
        <React.Fragment key={index}>
          <span style={{color: "gray"}}>{1 + index + "   "}</span>
          <span>{line}</span>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment key={index}>
          <span style={{color: "gray"}}>{1 + index + "   "}</span>
          <span>{line + '\n'}</span>
        </React.Fragment>
      )
    }
  }

  return (
    <pre style={preStyle}>
      { props.codeComment.map((v, i, a) => mappingFunc(v, i, a)) }
    </pre>
  )
}
