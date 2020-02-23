import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import actions from './actions'

const reducer = reducerWithInitialState(initialState)
  .case(actions.setCursorPos, (state, payload) => {
    return {
      ...state,
      game: { ...state.game, cursorPos: payload }
    }
  })
  .case(actions.setGameOver, (state, payload) => {
    return {
      ...state,
      game: { ...state.game, gameOver: payload }
    }
  })


export default reducer
