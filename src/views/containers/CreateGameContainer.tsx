import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { gameFormActions } from '../../state/datas/gameForm'
import { gameListActions } from '../../state/datas/gameList'
import { CreateGame } from '../components/createGame/CreateGame'

const CreateGameContainer: React.FC = () => {
  const gameFormInput = useSelector<State, State['gameForm']>( state => state.gameForm )

  const dispatch = useDispatch()
  const handleSetGameFormInput = (
    (formInput: State['gameForm']) => dispatch(gameFormActions.setGameFormInput(formInput))
  )
  const handleCreateNewGame = (
    (formInput: State['gameForm']) => dispatch(gameListActions.createNewGame(formInput))
  )

  const _props = { gameFormInput, handleSetGameFormInput, handleCreateNewGame }

  return (
    <CreateGame { ..._props } />
  )
}

export default CreateGameContainer
