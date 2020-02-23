import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { gamesActions, gamesOperations } from '../../state/games'
import { CreateGame } from '../components/createGame/CreateGame'

type Alias = {
  form: State['games']['form']
}

const CreateGameContainer: React.FC = () => {
  const form = useSelector<State, Alias['form']>( state => state.games.form )

  const dispatch = useDispatch()
  const handleSetForm = useCallback(
    (form: Alias['form']) => {
      dispatch(gamesActions.setForm(form))
    }, [dispatch]
  )
  const handleCreateGame = useCallback(
    (form: Alias['form']) => {
      dispatch(gamesOperations.createGame(form))
    }, [dispatch]
  )

  const _props = { form, handleSetForm, handleCreateGame }

  return (
    <CreateGame { ..._props } />
  )
}

export default CreateGameContainer
