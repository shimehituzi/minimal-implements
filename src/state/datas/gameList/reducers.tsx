import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'
import { initialState } from './state'

const reducer = reducerWithInitialState(initialState)
  .case(actions.setValue, (state, value) => {
    return { ...state, value }
  })

export default reducer
