import React from 'react'
import Editor from 'react-ace'
import { State } from '../../State'

type OwnProps = {
  form: State['games']['form']
}

type Handler = {
  handleSetForm: (
    (form: State['games']['form']) => void
  )
}

type Props = OwnProps & Handler

export const CodeCommentForm:React.FC<Props> = props => {
  const onChangeFunc = (inputVal: string) => {
    props.handleSetForm({
      ...props.form,
      codeComment: inputVal.split('\n')
    })
  }

  const value: string = props.form.codeComment.join('\n')

  return (
    <Editor onChange={onChangeFunc} value={value} style={{display: 'inline-block', width: '50%'}}/>
  )
}
