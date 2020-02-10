import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'
import { initialState } from './state'

const reducer = reducerWithInitialState(initialState)
  .case(actions.setGameFormInput, (_, newState) => {
    return newState
  })

export default reducer
