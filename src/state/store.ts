import { createStore, combineReducers } from 'redux'
import { RootState, rootReducers } from './'

const store = createStore(
  combineReducers<RootState>(rootReducers)
)

export default store
