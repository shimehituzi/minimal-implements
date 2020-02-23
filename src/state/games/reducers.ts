import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import actions from './actions'

const reducer = reducerWithInitialState(initialState)
  .case(actions.getGames.done, (state, payload) => {
    return { ...state, games: payload.result }
  })
  .case(actions.setForm, (state, payload) => {
    return { ...state, form: payload }
  })
  .case(actions.createGame.done, (state, payload) => {
    return {
      ...state,
      games: [ ...state.games, payload.result ],
      form: initialState.form
    }
  })

export default reducer
