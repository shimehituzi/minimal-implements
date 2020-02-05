import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../Store'
import { Read } from '../../components/read/Read'

const ReadContainer: React.FC = () => {
  const sourceCodes = useSelector<AppState, AppState['state']['read']['sourceCodes']>(
    (appState) => appState.state.read.sourceCodes
  )

  return (
    <Read sourceCodes={sourceCodes}/>
  )
}

export default ReadContainer
