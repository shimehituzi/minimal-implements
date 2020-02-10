import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'
import { initialState } from './state'

const reducer = reducerWithInitialState(initialState)
  .case(actions.createNewGame, (state, formInput) => {
    return [ ...state, formInput ]
  })

export default reducer
