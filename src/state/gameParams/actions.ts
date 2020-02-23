import { actionCreatorFactory } from 'typescript-fsa'
import State from './state'

const actionCreator = actionCreatorFactory('GAME_PARAMS')

const actions = {
  getGame: actionCreator.async<{}, State['game']>('GET_GAME'),
  setCursorPos: actionCreator<State['params']['cursorPos']>('SET_CURSOR_POS'),
  setGameOver: actionCreator<State['params']['gameOver']>('SET_GAME_OVER'),
}

export default actions
