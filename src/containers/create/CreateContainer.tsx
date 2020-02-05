import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Actions, State } from '../../Actions'
import { AppState } from '../../Store'
import { Create } from '../../components/create/Create'

const CreateContainer: React.FC = () => {
  const name = useSelector<AppState, string>( appState => appState.state.create.name )
  const description = useSelector<AppState, string>( appState => appState.state.create.description )
  const code = useSelector<AppState, string[]>( appState => appState.state.create.code )
  const codeComment = useSelector<AppState, string[]>( appState => appState.state.create.codeComment )
  const nextID = useSelector<AppState, number>( appState => appState.state.nextID )

  const dispatch = useDispatch()
  const handleSetName = (name: string) => dispatch(Actions.setName(name))
  const handleSetDescription = (description: string) => dispatch(Actions.setDescription(description))
  const handleSetCode = (code: string[]) => dispatch(Actions.setCode(code))
  const handleSetCodeComment = (codeComment: string[]) => dispatch(Actions.setCodeComment(codeComment))
  const handleCreateGame = (form: State['create']) => dispatch(Actions.createGame(form))

  const _props = { name, description, code, codeComment, nextID }
  const _handler = { handleSetName, handleSetDescription, handleSetCode, handleSetCodeComment, handleCreateGame }

  return (
    <Create { ..._props } { ..._handler } />
  )
}

export default CreateContainer
