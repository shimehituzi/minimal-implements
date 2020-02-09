import React, { Fragment } from 'react'
import Container1 from './containers/Container1'
import Container2 from './containers/Container2'

const App: React.FC = () => {
  return (
    <Fragment>
      <Container1 />
      <Container2 />
    </Fragment>
  )
}

export default App
