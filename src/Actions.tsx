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
  read: Array<State['create']>
  game: {
    cursorPos: {row: number, col: number}
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
  read: [],
  game: {
    cursorPos: {row: 0, col: 0} 
  }
}

const actionCreator = actionCreatorFactory()

export const Actions = {
  setName: actionCreator<string>('ACTION_SET_CREATE_NAME'),
  setDescription: actionCreator<string>('ACTION_SET_CREATE_DESCRIPTION'),
  setCode: actionCreator<string[]>('ACTION_SET_CREATE_CODE'),
  setCodeComment: actionCreator<string[]>('ACTION_SET_CREATE_CODE_COMMENT'),
  createGame: actionCreator<State['create']>('ACTION_CREATE_GAEM'),
  setCursorPos: actionCreator<State['game']['cursorPos']>('ACTION_SET_CURSOR_POS')
}
