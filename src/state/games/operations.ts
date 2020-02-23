import { Dispatch } from 'redux'
import axios from 'axios'
import State from './state'
import actions from './actions'

type Alias = {
  games: State['games']
}

const getGames = () => {
  return (dispatch: Dispatch, _getState: () => State) => {
    axios.get('http://localhost:3001/games')
      .then((res) => {
        dispatch(actions.getGames.done({result: res.data as Alias['games'], params: {}}))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

export default {
  getGames,
}
