import { actionCreatorFactory } from 'typescript-fsa'

export interface State {
  create: {
    id: number
    name: string
    description: string
    code: string[]
    codeComment: string[]
  }
  read: {
    sourceCodes: {
    id: number
    name: string
    description: string
    code: string[]
    codeComment: string[]
    }[]
  }
}

export const initialState: State = {
  create: {
    id: -1,
    name: '',
    description: '',
    code: [''],
    codeComment: [''],
  },
  read: {
    sourceCodes: []
  }
}

const actionCreator = actionCreatorFactory()

export const Actions = {
  setCreateName: actionCreator<string>('ACTION_SET_CREATE_NAME'),
  setCreateDescription: actionCreator<string>('ACTION_SET_CREATE_DESCRIPTION'),
  setCreateCode: actionCreator<string[]>('ACTION_SET_CREATE_CODE'),
  setCreateCodeComment: actionCreator<string[]>('ACTION_SET_CREATE_CODE_COMMENT'),
  createGame: actionCreator('ACTION_CREATE_GAEM'),
}
