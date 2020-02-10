import React from 'react'
import Editor from 'react-ace'
import { State } from '../../State'

type OwnProps = {
  gameFormInput: State['gameForm']
}

type Handler = {
  handleSetGameFormInput: (
    (gameFormInput: State['gameForm']) => void
  )
}

type Props = OwnProps & Handler

export const CodeCommentForm:React.FC<Props> = props => {
  const onChangeFunc = (inputVal: string) => {
    props.handleSetGameFormInput({
      ...props.gameFormInput,
      codeComment: inputVal.split('\n')
    })
  }

  const value: string = props.gameFormInput.codeComment.join('\n')

  return (
    <Editor onChange={onChangeFunc} value={value} style={{display: 'inline-block', width: '50%'}}/>
  )
}
