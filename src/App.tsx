import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import GameContainer from './containers/game/GameContainer'
import Root from './Root'

const App: React.FC = () => {
  return (
    <Router>
      <Link to='/'><button><h1>Home</h1></button></Link>
      <Route exact path='/' component={Root} />
      <Route path='/Game/:id' component={GameContainer} />
    </Router>
  )
}

export default App
