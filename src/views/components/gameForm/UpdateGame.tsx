import React from 'react'
import { State } from '../../State'
import { BasicForm } from './BasicForm'
import { CodeForm } from './CodeForm'
import { CodeCommentForm } from './CodeCommentForm'

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
  handleUpdateGame: (
    (form: Required<Alias['form']>) => void
  )
}

type Props = OwnProps & Handler

export const UpdateGame: React.FC<Props> = props => {
  const onUpdateGameFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (props.form.id === undefined) return
    props.handleUpdateGame(props.form as Required<Alias['form']>)
  }

  const _props = {
    form: props.form,
    handleSetForm: props.handleSetForm
  }

  return (
    <form onSubmit={onUpdateGameFunc}>
      <BasicForm { ..._props }/>
      <div style={{display: 'inline-block', width: '100%'}}>
        <CodeForm { ..._props }/>
        <CodeCommentForm { ..._props }/>
      </div>
      <label>
        <input type='submit' value="create"/>
      </label>
    </form>
  )
}
