import { actionCreatorFactory } from 'typescript-fsa'

export interface State {
  nextID: number
  sourceCodes: (Array<{id:number,name:string,description:string}>)
  gameTypedText: string
  gameRemainingText: string
}

export const initialState: State = {
  nextID: 0,
  sourceCodes: [],
  gameTypedText: '',
  gameRemainingText: 'hoge',
}

const actionCreator = actionCreatorFactory()

export const Actions = {
  setNextID: actionCreator<number>('ACTION_SET_NEXT_ID'),
  setSourceCodes: actionCreator<{id: number, name: string, description: string}>('ACTION_SET_SOURCE_CODES'),
  setGameTypedText: actionCreator<string>('ACTION_SET_GAME_TYPED_TEXT'),
  setGameRemainingText: actionCreator<string>('ACTION_SET_GAME_REMAINING_TEXT')
}
