import React from 'react'

interface OwnProps {
  codeComment: string
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
      { props.codeComment }
    </pre>
  )
}
