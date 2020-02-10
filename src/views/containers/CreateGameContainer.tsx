import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { gameFormActions } from '../../state/datas/gameForm'
import { gameListActions } from '../../state/datas/gameList'
import { CreateGame } from '../components/createGame/CreateGame'

const CreateGameContainer: React.FC = () => {
  const gameFormInput = useSelector<State, State['gameForm']>( state => state.gameForm )

  const dispatch = useDispatch()
  const handleSetGameFormInput = useCallback(
    (formInput: State['gameForm']) => dispatch(gameFormActions.setGameFormInput(formInput)), [dispatch]
  )
  const handleCreateNewGame = useCallback(
    (formInput: State['gameForm']) => dispatch(gameListActions.createNewGame(formInput)), [dispatch]
  )

  const _props = { gameFormInput, handleSetGameFormInput, handleCreateNewGame }

  return (
    <CreateGame { ..._props } />
  )
}

export default CreateGameContainer
