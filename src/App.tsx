import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Root from './Root'

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path='/' component={Root} />
    </Router>
  )
}

export default App
