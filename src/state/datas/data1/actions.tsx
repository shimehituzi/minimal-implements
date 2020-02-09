import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const actions = {
  setValue: actionCreator<string>('ACTION_SET_VALUE')
}

export default actions
