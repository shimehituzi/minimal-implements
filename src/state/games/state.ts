type Game = {
  id: number
  name: string
  description: string
  code: string[]
  codeComment: string[]
}

type FormType = "Hidden" | "Create" | "Update"

type State = {
  games: (Array<Game>)
  form: (Omit<Game, "id"> & Partial<Game>)
  formType: FormType
}

export const initialState: State = {
  games: [],
  form: {
    name: '',
    description: '',
    code: [''],
    codeComment: ['']
  },
  formType: "Hidden"
}

export default State
