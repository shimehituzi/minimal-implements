import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { State } from '../State'
import { gameDataActions } from '../../state/datas/gameData'
import { Game } from '../components/game/Game'

interface OwnProps extends RouteComponentProps<{id: string}> {}

type Props = OwnProps

const GameContainer: React.FC<Props> = props => {
  const gameList = useSelector<State, State['gameList']>( state => state.gameList )

  const maybeCode = gameList.find(x => x.id === Number(props.match.params.id))?.code
  const code = maybeCode !== undefined ? maybeCode : ['The source code is not found']

  const maybeComment = gameList.find(x => x.id === Number(props.match.params.id))?.codeComment
  const codeComment = maybeComment !== undefined ? maybeComment : ['ソースコードが見つかりませんでした']

  const cursorPos = useSelector<State, State['gameData']['cursorPos']>( state => state.gameData.cursorPos )
  const gameOver = useSelector<State, State['gameData']['gameOver']>( state => state.gameData.gameOver )

  const dispatch = useDispatch()
  const handleSetCursorPos = useCallback(
    (cursorPos: State['gameData']['cursorPos']) => dispatch(gameDataActions.setCursorPos(cursorPos)), [dispatch]
  )
  const handleSetGameOver = useCallback(
    (gameOver: State['gameData']['gameOver']) => dispatch(gameDataActions.setGameOver(gameOver)), [dispatch]
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
