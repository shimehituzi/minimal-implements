import { actionCreatorFactory } from 'typescript-fsa'
import { State } from './state'

const actionCreator = actionCreatorFactory()

export const actions = {
  setCursorPos: actionCreator<State['cursorPos']>('SET_CURSOR_POS'),
  setGameOver: actionCreator<State['gameOver']>('SET_GAME_OVER')
}

export default actions
