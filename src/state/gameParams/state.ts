type Game = {
  cursorPos: {
    row: number
    col: number
  }
  gameOver: boolean
}

type State = {
  game: Game
}

export const initialState: State = {
  game: {
    cursorPos: {
      row: 0,
      col: 0
    },
    gameOver: false
  }
}

export default State
