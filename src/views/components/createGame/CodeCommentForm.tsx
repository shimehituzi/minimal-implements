import React from 'react'
import Editor from 'react-ace'
import { State } from '../../State'

type Alias = {
  form: State['games']['form']
}

type OwnProps = {
  form: Alias['form']
}

type Handler = {
  handleSetForm: (
    (form: Alias['form']) => void
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
