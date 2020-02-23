import { actionCreatorFactory } from 'typescript-fsa'
import { AppState } from '../../store'

const actionCreator = actionCreatorFactory()

export const actions = {
  createNewGame: actionCreator<AppState['gameForm']>('CREATE_NEW_GAME')
}

export default actions
