import React from 'react'
import { State } from '../../State'
import { BasicForm } from './BasicForm'
import { CodeForm } from './CodeForm'
import { CodeCommentForm } from './CodeCommentForm'

type OwnProps = {
  gameFormInput: State['gameForm']
}

type Handler = {
  handleSetGameFormInput: (
    (gameFormInput: State['gameForm']) => void
  )
  handleCreateNewGame: (
    (gameFormInput: State['gameForm']) => void
  )
}

type Props = OwnProps & Handler

export const CreateGame: React.FC<Props> = props => {
  const onCreateNewGameFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.handleCreateNewGame(props.gameFormInput)
  }

  const _props = {
    gameFormInput: props.gameFormInput,
    handleSetGameFormInput: props.handleSetGameFormInput
  }

  return (
    <form onSubmit={onCreateNewGameFunc}>
      <BasicForm { ..._props }/>
      <div style={{display: 'inline-block', width: '100%'}}>
        <CodeForm { ..._props }/>
        <CodeCommentForm { ..._props }/>
      </div>
    </form>
  )
}
