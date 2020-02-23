type Game = {
  id: number
  name: string
  description: string
  code: string[]
  codeComment: string[]
}

type State = {
  games: (Array<Game>)
  form: (Omit<Game, "id">)
}

export const initialState: State = {
  games: [],
  form: {
    name: '',
    description: '',
    code: [''],
    codeComment: ['']
  }
}

export default State
