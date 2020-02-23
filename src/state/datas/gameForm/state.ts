export type State = {
  id: number
  name: string
  description: string
  code: string[]
  codeComment: string[]
}

export const initialState: State = {
  id: 0,
  name: '',
  description: '',
  code: [''],
  codeComment: [''],
}

export default State
