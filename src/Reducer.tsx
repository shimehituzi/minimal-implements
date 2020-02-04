import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState, Actions } from './Actions'

export const Reducer = reducerWithInitialState(initialState)
  .case(Actions.setNextID, (state, nextID) => {
    return { ...state, nextID: nextID }
  })
  .case(Actions.setSourceCodes, (state, sourceCode) => {
    return {
      ...state,
      sourceCodes: [ ...state.sourceCodes, sourceCode ]
    }
  })
  .case(Actions.setGameTypedText, (state, newGameTypedText) => {
    return { ...state, gameTypedText: newGameTypedText }
  })
  .case(Actions.setGameRemainingText, (state, newGameRemainingText) => {
    return { ...state, gameRemainingText: newGameRemainingText }
  })
