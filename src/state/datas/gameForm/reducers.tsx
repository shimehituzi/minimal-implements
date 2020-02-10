import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { actions } from './actions'
import { actions as gameListActions } from '../gameList/actions'
import { initialState } from './state'

const reducer = reducerWithInitialState(initialState)
  .case(actions.setGameFormInput, (_, newState) => {
    return newState
  })
  .case(gameListActions.createNewGame, (state, _) => {
    return {
      ...state,
      initialState,
      id: state.id + 1
    }
  })

export default reducer
