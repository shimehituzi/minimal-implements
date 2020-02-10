import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../State'
import { GameList } from '../components/gameList/GameList'

const GameListContainer: React.FC = () => {
  const gameList = useSelector<State, State['gameList']>( state => state.gameList )

  return (
    <GameList gameList={gameList}/>
  )
}

export default GameListContainer
