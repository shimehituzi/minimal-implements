import { State as gameFormState } from './gameForm/state'
import { State as gameListState } from './gameList/state'

export type State = {
  gameForm: gameFormState
  gameList: gameListState
}
