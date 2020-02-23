export type State = {
  cursorPos: { row: number, col: number }
  gameOver: boolean
}

export const initialState: State = {
  cursorPos: { row: 0, col: 0 },
  gameOver: false
}

export default State
