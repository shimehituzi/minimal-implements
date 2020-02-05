import { actionCreatorFactory } from 'typescript-fsa'

export interface State {
  nextID: number
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
  game: {
    typedCode: string[]
    remainingCode: string[]
  }
}

export const initialState: State = {
  nextID: 0,
  create: {
    id: -1,
    name: '',
    description: '',
    code: [''],
    codeComment: [''],
  },
  read: {
    sourceCodes: []
  },
  game: {
    typedCode: [''],
    remainingCode: ['']
  }
}

const actionCreator = actionCreatorFactory()

export const Actions = {
  setName: actionCreator<string>('ACTION_SET_CREATE_NAME'),
  setDescription: actionCreator<string>('ACTION_SET_CREATE_DESCRIPTION'),
  setCode: actionCreator<string[]>('ACTION_SET_CREATE_CODE'),
  setCodeComment: actionCreator<string[]>('ACTION_SET_CREATE_CODE_COMMENT'),
  createGame: actionCreator<State['create']>('ACTION_CREATE_GAEM'),
  setTypedCode: actionCreator<string[]>('ACTION_SET_TYPED_CODE'),
  setRemainingCode: actionCreator<string[]>('ACTION_SET_REMAINING_CODE')
}
