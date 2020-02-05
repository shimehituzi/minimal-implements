import React, { useState } from 'react'
import Editor from 'react-ace'

interface OwnProps {
  setCodeComment: Function
}

type Props = OwnProps

export const CodeCommentForm:React.FC<Props> = props => {
  const [inputComment, setinputComment] = useState<string[]>([''])

  const onChangeFunc = (feildVal: string) => {
    const codeComment = feildVal.split('\n')
    setinputComment(codeComment)
    props.setCodeComment(codeComment)
  }

  const inputCommentString: string =  inputComment.join('\n')

  return (
    <Editor onChange={onChangeFunc} value={inputCommentString} style={{display: 'inline-block', width: 500}}/>
  )
}
