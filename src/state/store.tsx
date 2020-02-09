import { createStore, combineReducers } from 'redux'
import { State } from './datas/state'
import * as reducers from './datas'

export type AppState = State

const store = createStore(
  combineReducers<AppState>({
    data1: reducers.data1Reducer,
  })
)

export default store
