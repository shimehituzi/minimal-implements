import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const actions = {
  setValue: actionCreator<string>('ACTION_SET_VALUE2')
}

export default actions
