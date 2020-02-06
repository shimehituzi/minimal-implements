import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../Store'
import { Read } from '../../components/read/Read'

const ReadContainer: React.FC = () => {
  const sourceCodes = useSelector<AppState, AppState['state']['read']>( (appState) => appState.state.read)

  return (
    <Read sourceCodes={sourceCodes}/>
  )
}

export default ReadContainer
