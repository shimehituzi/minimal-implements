import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { State } from '../State'
import { gameParamsActions } from '../../state/gameParams'
import { Game } from '../components/game/Game'

type Alias = {
  games: State['games']['games']
  cursorPos: State['gameParams']['game']['cursorPos']
  gameOver: State['gameParams']['game']['gameOver']
}

type OwnProps = RouteComponentProps<{id: string}>

type Props = OwnProps

const GameContainer: React.FC<Props> = props => {
  const games = useSelector<State, Alias['games']>( state => state.games.games )

  const maybeCode = games.find(x => x.id === Number(props.match.params.id))?.code
  const code = maybeCode !== undefined ? maybeCode : ['The source code is not found']

  const maybeComment = games.find(x => x.id === Number(props.match.params.id))?.codeComment
  const codeComment = maybeComment !== undefined ? maybeComment : ['ソースコードが見つかりませんでした']

  const cursorPos = useSelector<State, Alias['cursorPos']>(
    state => state.gameParams.game.cursorPos
  )
  const gameOver = useSelector<State, Alias['gameOver']>(
    state => state.gameParams.game.gameOver
  )

  const dispatch = useDispatch()
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
    handleSetCursorPos({row: 0, col: 0})
    handleSetGameOver(false)
  }, [handleSetGameOver, handleSetCursorPos])

  const _props = {
    code,
    codeComment,
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
