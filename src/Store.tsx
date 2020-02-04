import { createStore, combineReducers } from 'redux'
import { State } from './Actions'
import { Reducer } from './Reducer'

export type AppState = {
  state: State
}

const store = createStore(
  combineReducers<AppState>({
    state: Reducer
  })
)

export default store
