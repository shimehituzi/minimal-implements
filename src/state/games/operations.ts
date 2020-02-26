import { Dispatch } from 'redux'
import axios from 'axios'
import State from './state'
import actions from './actions'

type Alias = {
  games: State['games']
  form: State['form']
  game: State['games'][0]
  id: State['games'][0]['id']
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

const createGame = (form: Alias['form']) => {
  return (dispatch: Dispatch, _getState: () => State) => {
    axios.post('http://localhost:3001/games', { ...form })
      .then((res) => {
        dispatch(actions.createGame.done({result: res.data as Alias['game'], params: {}}))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

const destroyGame = (games: Alias['games'], id: Alias['id']) => {
  return (dispatch: Dispatch, _getState: () => State) => {
    axios.delete('http://localhost:3001/games/' + id)
      .then(() => {
        const newGames = games.filter(elem => elem.id !== id)
        dispatch(actions.destroyGame.done({result: newGames, params: {}}))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

const updateGame = (form: Required<State['form']>) => {
  return (dispatch: Dispatch, _getState: () => State) => {
    axios.put('http://localhost:3001/games/' + form.id, { ...form })
      .then((res) => {
        dispatch(actions.updateGame.done({ result: res.data as State['games'][0], params: {} }))
      })
  }
}

export default {
  getGames,
  createGame,
  destroyGame,
  updateGame,
}
