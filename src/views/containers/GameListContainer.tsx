import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../State'
import { GameList } from '../components/gameList/GameList'

type Alias = {
  games: State['games']['games']
}

const GameListContainer: React.FC = () => {
  const games = useSelector<State, Alias['games']>( state => state.games.games )

  return (
    <GameList games={games}/>
  )
}

export default GameListContainer
