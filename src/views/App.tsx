import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'


const App: React.FC = () => {
  return (
    <Router>
      <Link to='/'><button><h1>Home</h1></button></Link>
      <Route exact path='/' component={HomeContainer}/>
    </Router>
  )
}

export default App
