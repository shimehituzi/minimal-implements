import React from 'react'
import Editor from 'react-ace'

interface OwnProps {
  value: string[]
  setCodeComment: Function
}

type Props = OwnProps

export const CodeCommentForm:React.FC<Props> = props => {
  const onChangeFunc = (feildVal: string) => {
    const codeComment = feildVal.split('\n')
    props.setCodeComment(codeComment)
  }

  const value: string = props.value.join('\n')

  return (
    <Editor onChange={onChangeFunc} value={value} style={{display: 'inline-block', width: 500}}/>
  )
}
