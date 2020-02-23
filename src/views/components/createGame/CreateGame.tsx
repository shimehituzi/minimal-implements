import React from 'react'
import { State } from '../../State'
import { BasicForm } from './BasicForm'
import { CodeForm } from './CodeForm'
import { CodeCommentForm } from './CodeCommentForm'

type OwnProps = {
  form: State['games']['form']
}

type Handler = {
  handleSetForm: (
    (form: State['games']['form']) => void
  )
  handleCreateGame: (
    (formWithID: State['games']['games'][0]) => void
  )
}

type Props = OwnProps & Handler

export const CreateGame: React.FC<Props> = props => {
  const onCreateNewGameFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.handleCreateGame({
      ...props.form,
      id: (new Date()).getTime()
    })
  }

  const _props = {
    form: props.form,
    handleSetForm: props.handleSetForm
  }

  return (
    <form onSubmit={onCreateNewGameFunc}>
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
