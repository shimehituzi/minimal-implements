import { gamesState, gamesReducer } from './games'
import { gameParamsState, gameParamsReducer } from './gameParams'

export type RootState = {
  games: gamesState
  gameParams: gameParamsState
}

export const rootReducers = {
  games: gamesReducer,
  gameParams: gameParamsReducer
}
