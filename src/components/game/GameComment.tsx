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

  return (
    <pre style={preStyle}>
      { props.codeComment.map((line, index) => {
        return (
          <React.Fragment key={index}>
            <span style={{color: "gray"}}>{1 + index + "   "}</span>
            <span>{line}</span>
          </React.Fragment>
        )
      }) }
    </pre>
  )
}
