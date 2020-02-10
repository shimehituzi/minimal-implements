import React from 'react'
import CreateGameContainer from '../../containers/CreateGameContainer'
import GameListContainer from '../../containers/GameListContainer'

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <GameListContainer />
      <hr/>
      <CreateGameContainer />
    </React.Fragment>
  )
}
