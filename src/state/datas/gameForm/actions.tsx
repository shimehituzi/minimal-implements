import { actionCreatorFactory } from 'typescript-fsa'
import { State } from './state'

const actionCreator = actionCreatorFactory()

export const actions = {
  setGameFormInput: actionCreator<State>('SET_GAME_FORM_INPUT')
}

export default actions
