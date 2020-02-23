import { actionCreatorFactory } from 'typescript-fsa'
import State from './state'

const actionCreator = actionCreatorFactory('GAME_PARAMS')

const actions = {
  setCursorPos: actionCreator<State['game']['cursorPos']>('SET_CURSOR_POS'),
  setGameOver: actionCreator<State['game']['gameOver']>('SET_GAME_OVER')
}

export default actions
