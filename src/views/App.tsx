import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import GameContainer from './containers/GameContainer'


const App: React.FC = () => {
  return (
    <Router>
      <Link to='/'><button><h1>Home</h1></button></Link>
      <Route exact path='/' component={HomeContainer}/>
      <Route path='/Game/:id' component={GameContainer}/>
    </Router>
  )
}

export default App
