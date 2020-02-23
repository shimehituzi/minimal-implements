import { Dispatch } from 'redux'
import axios from 'axios'
import State from './state'
import actions from './actions'

type Alias = {
  id: State['game']['id']
  game: State['game']
}

const getGame = (id: Alias['id']) => {
  return (dispatch: Dispatch, _getState: () => State) => {
    axios.get('http://localhost:3001/games/' + id)
      .then((res) => {
        dispatch(actions.getGame.done({result: res.data as Alias['game'], params: {}}))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

export default {
  getGame,
}
