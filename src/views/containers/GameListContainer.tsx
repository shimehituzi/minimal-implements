import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { gamesOperations, gamesActions } from '../../state/games'
import { GameList } from '../components/gameList/GameList'

type Alias = {
  games: State['games']['games']
  form: State['games']['form']
  formType: State['games']['formType']
  id: State['games']['games'][0]['id']
}

const GameListContainer: React.FC = () => {
  const games = useSelector<State, Alias['games']>( state => state.games.games )

  const dispatch = useDispatch()
  const handleSetform = useCallback(
    (form: Alias['form']) => {
      dispatch(gamesActions.setForm(form))
    }, [dispatch]
  )
  const handleSetformType = useCallback(
    (formType: Alias['formType']) => {
      dispatch(gamesActions.setFromType(formType))
    }, [dispatch]
  )
  const handleGetGames = useCallback(
    () => dispatch(gamesOperations.getGames()), [dispatch]
  )
  const handleDestroyGame = useCallback(
    (games: Alias['games'], id: Alias['id']) => {
      dispatch(gamesOperations.destroyGame(games, id))
    }, [dispatch]
  )

  useEffect(() => {
    handleGetGames()
  }, [handleGetGames])

  const _props = { games, handleDestroyGame, handleSetform, handleSetformType }

  return (
    <GameList { ..._props }/>
  )
}

export default GameListContainer
