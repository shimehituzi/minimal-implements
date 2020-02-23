import { RootState } from '../'

type Game = RootState['games']['games'][0]

type Params = {
  cursorPos: {
    row: number
    col: number
  }
  gameOver: boolean
}

type State = {
  game: Game
  params: Params
}

export const initialState: State = {
  game: {
    id: -1,
    name: '',
    description: '',
    code: ['The source code is not found'],
    codeComment: ['ソースコードが見つかりませんでした']
  },
  params: {
    cursorPos: {
      row: 0,
      col: 0
    },
    gameOver: false
  }
}

export default State
