import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path='/' component={HomeContainer} />
    </Router>
  )
}

export default App
