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
  setCreateId: actionCreator<number>('ACTION_SET_CREATE_ID'),
  setCreateName: actionCreator<string>('ACTION_SET_CREATE_NAME'),
  setCreateDescription: actionCreator<string>('ACTION_SET_CREATE_DESCRIPTION'),
  setCreateCode: actionCreator<string[]>('ACTION_SET_CREATE_CODE'),
  setCreateCodeComment: actionCreator<string[]>('ACTION_SET_CREATE_CODE_COMMENT'),
  setReadSourceCode: actionCreator('ACTION_SET_READ_SOURCE_CODE'),
}
