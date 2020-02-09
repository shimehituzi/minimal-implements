import { createStore, combineReducers } from 'redux'
import { State } from './datas/state'
import * as reducers from './datas'

export type AppState = State

const store = createStore(
  combineReducers<AppState>({
    data1: reducers.data1Reducer,
    data2: reducers.data2Reducer
  })
)

export default store
