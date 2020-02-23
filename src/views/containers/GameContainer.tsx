import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { State } from '../State'
import { gameParamsActions, gameParamsOperations } from '../../state/gameParams'
import { Game } from '../components/game/Game'

type Alias = {
  id: State['gameParams']['game']['id']
  game: State['gameParams']['game']
  cursorPos: State['gameParams']['params']['cursorPos']
  gameOver: State['gameParams']['params']['gameOver']
}

type OwnProps = RouteComponentProps<{id: string}>

type Props = OwnProps

const GameContainer: React.FC<Props> = props => {
  const id: Alias['id'] = Number(props.match.params.id)

  const game = useSelector<State, Alias['game']>( state => state.gameParams.game )
  const cursorPos = useSelector<State, Alias['cursorPos']>( state => state.gameParams.params.cursorPos )
  const gameOver = useSelector<State, Alias['gameOver']>( state => state.gameParams.params.gameOver )

  const dispatch = useDispatch()
  const handleGetGame = useCallback(
    (id: Alias['id']) => {
      dispatch(gameParamsOperations.getGame(id))
    }, [dispatch]
  )
  const handleSetCursorPos = useCallback(
    (cursorPos: Alias['cursorPos']) => {
      dispatch(gameParamsActions.setCursorPos(cursorPos))
    }, [dispatch]
  )
  const handleSetGameOver = useCallback(
    (gameOver: Alias['gameOver']) => {
      dispatch(gameParamsActions.setGameOver(gameOver))
    }, [dispatch]
  )

  useEffect(() => {
    handleGetGame(id)
    handleSetCursorPos({row: 0, col: 0})
    handleSetGameOver(false)
  }, [handleSetGameOver, handleSetCursorPos, handleGetGame, id])

  const _props = {
    code: game.code,
    codeComment: game.codeComment,
    cursorPos,
    gameOver,
    handleSetCursorPos,
    handleSetGameOver
  }

  return (
    <Game { ..._props }/>
  )
}

export default GameContainer
