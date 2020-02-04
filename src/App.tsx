import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavbarContainer from './containers/navbar/NavbarContainer'
import HomeContainer from './containers/home/HomeContainer'
import GameContainer from './containers/game/GameContainer'

const App: React.FC = () => {
  return (
    <Router>
      <NavbarContainer />
      <Route exact path='/' component={HomeContainer} />
      <Route path='/Game/:id' component={GameContainer} />
    </Router>
  )
}

export default App
