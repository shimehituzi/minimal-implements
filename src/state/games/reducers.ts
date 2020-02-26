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
      form: initialState.form,
      formType: initialState.formType
    }
  })
  .case(actions.destroyGame.done, (state, payload) => {
    return { ...state, games: payload.result }
  })
  .case(actions.setFromType, (state, payload) => {
    return {
      ...state,
      formType: payload,
      form: {
        ...initialState.form,
        id: undefined
      }
    }
  })
  .case(actions.updateGame.done, (state, payload) => {
    return {
      ...state,
      games: state.games.map(elem => elem.id === payload.result.id ? payload.result : elem),
      form: initialState.form,
      formType: initialState.formType
    }
  })

export default reducer
