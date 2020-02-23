import { default as gameFormReducer } from './gameForm/reducers'
import { default as gameListReducer } from './gameList/reducers'
import { default as gameDataReducer } from './gameData/reducers'

export const reducers = {
  gameForm: gameFormReducer,
  gameList: gameListReducer,
  gameData: gameDataReducer
}
