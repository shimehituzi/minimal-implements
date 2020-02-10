import { State as data1State } from './data1/state'
import { State as gameFormState } from './gameForm/state'

export type State = {
  data1: data1State
  gameForm: gameFormState
}
