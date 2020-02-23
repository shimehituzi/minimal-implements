import { createStore, combineReducers } from 'redux'
import { State } from './datas/state'
import { reducers } from './datas/reducers'

export type AppState = State

const store = createStore(
  combineReducers<AppState>(reducers)
)

export default store
