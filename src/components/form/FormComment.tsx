import React, { useState } from 'react'
import Editor from 'react-ace'

export const FormComment:React.FC = () => {
  const [inputComment, setinputComment] = useState<string[]>([''])

  const onChangeFunc = (feildVal: string) => {
    setinputComment(feildVal.split('\n'))
  }

  const inputCommentString: string =  inputComment.join('\n')

  return (
    <Editor onChange={onChangeFunc} value={inputCommentString} style={{display: 'inline-block', width: '400px'}}/>
  )
}
