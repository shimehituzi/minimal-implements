import { actionCreatorFactory } from 'typescript-fsa'
import State from './state'

const actionCreator = actionCreatorFactory('GAMES')

const actions = {
  getGames: actionCreator.async<{}, State['games']>('GET_GAMES'),
  setForm: actionCreator<State['form']>('SET_FORM'),
  createGame: actionCreator<State['games'][0]>('CREATE_GAME'),
}

export default actions
