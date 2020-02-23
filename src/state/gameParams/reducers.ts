import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import actions from './actions'

const reducer = reducerWithInitialState(initialState)
  .case(actions.getGame.done, (state, payload) => {
    return {
      ...state,
      game: payload.result
    }
  })
  .case(actions.setCursorPos, (state, payload) => {
    return {
      ...state,
      params: { ...state.params, cursorPos: payload }
    }
  })
  .case(actions.setGameOver, (state, payload) => {
    return {
      ...state,
      params: { ...state.params, gameOver: payload }
    }
  })


export default reducer
