import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { gamesActions } from '../../state/games'
import { CreateGame } from '../components/createGame/CreateGame'

const CreateGameContainer: React.FC = () => {
  const form = useSelector<State, State['games']['form']>( state => state.games.form )

  const dispatch = useDispatch()
  const handleSetForm = useCallback(
    (form: State['games']['form']) => {
      dispatch(gamesActions.setForm(form))
    }, [dispatch]
  )
  const handleCreateGame = useCallback(
    (formWithID: State['games']['games'][0]) => {
      dispatch(gamesActions.createGame(formWithID))
    }, [dispatch]
  )

  const _props = { form, handleSetForm, handleCreateGame }

  return (
    <CreateGame { ..._props } />
  )
}

export default CreateGameContainer
