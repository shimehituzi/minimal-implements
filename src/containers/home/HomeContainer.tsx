import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../Store'
import { Actions } from '../../Actions'
import { Home } from '../../components/home/Home'

const HomeContainer: React.FC = () => {
  const nextID = useSelector<AppState, number>((appState) => appState.state.nextID)
  const sourceCodes = useSelector<AppState, Array<{id:number,name:string,description:string}>>
    ((appState) => appState.state.sourceCodes)

  const dispatch = useDispatch()
  const handleSetNextID = (nextID: number) => dispatch(Actions.setNextID(nextID))
  const handleSetSourceCodes = (sourceCode: {id:number,name:string,description:string}) => dispatch(Actions.setSourceCodes(sourceCode))

  const _props = { nextID, sourceCodes, handleSetNextID, handleSetSourceCodes }

  return (
    <Home {..._props} />
  )
}

export default HomeContainer
