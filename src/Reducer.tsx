import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState, Actions } from './Actions'

export const Reducer = reducerWithInitialState(initialState)
  .case(Actions.setName, (state, name) => {
    return { ...state, create: { ...state.create, name: name } }
  })
  .case(Actions.setDescription, (state, description) => {
    return { ...state, create: { ...state.create, description: description } }
  })
  .case(Actions.setCode, (state, code) => {
    return { ...state, create: { ...state.create, code: code } }
  })
  .case(Actions.setCodeComment, (state, codeComment) => {
    return { ...state, create: { ...state.create, codeComment: codeComment } }
  })
