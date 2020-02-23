import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'
import { gameListActions } from '../gameList'
import { initialState } from './state'

const reducer = reducerWithInitialState(initialState)
  .case(actions.setGameFormInput, (_, newState) => {
    return newState
  })
  .case(gameListActions.createNewGame, (state, _) => {
    return {
      ...initialState,
      id: state.id + 1
    }
  })

export default reducer