import { State as gameFormState } from './gameForm/state'
import { State as gameListState } from './gameList/state'
import { State as gameDataState } from './gameData/state'

export type State = {
  gameForm: gameFormState
  gameList: gameListState
  gameData: gameDataState
}
