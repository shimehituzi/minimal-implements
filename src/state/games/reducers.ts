import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import actions from './actions'

const reducer = reducerWithInitialState(initialState)
  .case(actions.setForm, (state, payload) => {
    return { ...state, form: payload }
  })
  .case(actions.createGame, (state, payload) => {
    return {
      ...state,
      games: [ ...state.games, payload ],
      form: initialState.form
    }
  })

export default reducer