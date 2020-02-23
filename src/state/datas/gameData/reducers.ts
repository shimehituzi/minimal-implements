import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'
import { initialState } from './state'

const reducer = reducerWithInitialState(initialState)
  .case(actions.setCursorPos, (state, cursorPos) => {
    return { ...state, cursorPos: cursorPos }
  })
  .case(actions.setGameOver, (state, gameOver) => {
    return { ...state, gameOver: gameOver }
  })


export default reducer
