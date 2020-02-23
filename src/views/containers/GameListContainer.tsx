import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { gamesOperations } from '../../state/games'
import { GameList } from '../components/gameList/GameList'

type Alias = {
  games: State['games']['games']
  id: State['games']['games'][0]['id']
}

const GameListContainer: React.FC = () => {
  const games = useSelector<State, Alias['games']>( state => state.games.games )

  const dispatch = useDispatch()
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

  return (
    <GameList games={games} handleDestroyGame={handleDestroyGame}/>
  )
}

export default GameListContainer
