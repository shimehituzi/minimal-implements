import { AppState } from '../../store'

export type State = {
  gameList: (Array<AppState['gameForm']>)
}

export const initialState: State = {
  gameList: []
}

export default State
