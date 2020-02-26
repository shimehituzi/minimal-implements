import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { gamesActions, gamesOperations } from '../../state/games'
import { UpdateGame } from '../components/gameForm/UpdateGame'

type Alias = {
  form: State['games']['form']
}

const UpdateGameContainer: React.FC = () => {
  const form = useSelector<State, Alias['form']>( state => state.games.form )

  const dispatch = useDispatch()
  const handleSetForm = useCallback(
    (form: Alias['form']) => {
      dispatch(gamesActions.setForm(form))
    }, [dispatch]
  )
  const handleUpdateGame = useCallback(
    (form: Required<Alias['form']>) => {
      dispatch(gamesOperations.updateGame(form))
    }, [dispatch]
  )

  const _props = { form, handleSetForm, handleUpdateGame }

  return (
    <UpdateGame { ..._props } />
  )
}

export default UpdateGameContainer
