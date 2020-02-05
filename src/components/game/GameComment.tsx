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

  const jsxElem = (cr: string, line: string, index: number) => (
    <React.Fragment key={index}>
      <span style={{color: "gray"}}>{1 + index + "   "}</span>
      <span>{line + cr}</span>
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
