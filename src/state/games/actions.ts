import { actionCreatorFactory } from 'typescript-fsa'
import State from './state'

const actionCreator = actionCreatorFactory('GAMES')

const actions = {
  getGames: actionCreator.async<{}, State['games']>('GET_GAMES'),
  setForm: actionCreator<State['form']>('SET_FORM'),
  createGame: actionCreator.async<{}, State['games'][0]>('CREATE_GAME'),
  destroyGame: actionCreator.async<{}, State['games']>('DESTROY_GAME'),
  setFromType: actionCreator<State['formType']>('SET_FORM_TYPE'),
  updateGame: actionCreator.async<{}, State['games'][0]>('UPDATE_GAME'),
}

export default actions
