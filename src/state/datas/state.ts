import { default as gameFormState } from './gameForm/state'
import { default as gameListState } from './gameList/state'
import { default as gameDataState } from './gameData/state'

export type State = {
  gameForm: gameFormState
  gameList: gameListState
  gameData: gameDataState
}
