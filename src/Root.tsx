import React from 'react'
import CreateContainer from './containers/create/CreateContainer'
import ReadContainer from './containers/read/ReadContainer'

const Root: React.FC = () => {
  return (
    <React.Fragment>
      <ReadContainer/>
      <hr/>
      <CreateContainer/>
    </React.Fragment>
  )
}

export default Root
