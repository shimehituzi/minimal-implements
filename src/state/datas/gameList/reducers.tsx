import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'
import { initialState } from './state'

const reducer = reducerWithInitialState(initialState)
  .case(actions.createNewGame, (state, formInput) => {
    return {
      ...state,
      gameList: [ ...state.gameList, formInput ]
    }
  })

export default reducer
