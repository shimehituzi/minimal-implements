import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { AppState } from '../../Store'
import { Actions } from '../../Actions'
import { Game } from '../../components/game/Game'
import { GameComment } from '../../components/game/GameComment'

interface OwnProps extends RouteComponentProps<{id: string}> {}

type Props = OwnProps

const GameContainer: React.FC<Props> = props => {
  const sourceCodes = useSelector<AppState, AppState['state']['read']>((appState) => appState.state.read)

  const maybeCode = sourceCodes.find(x => x.id === Number(props.match.params.id))?.code
  const typingCode = maybeCode !== undefined ? maybeCode : ['The source code is not found']

  const maybeComment = sourceCodes.find(x => x.id === Number(props.match.params.id))?.codeComment
  const codeComment = maybeComment !== undefined ? maybeComment : ['ソースコードが見つかりませんでした']

  const cursorPos = useSelector<AppState, AppState['state']['game']['cursorPos']>(
    (appState) => appState.state.game.cursorPos
  )
  const gameOver = useSelector<AppState, boolean>((appState) => appState.state.game.gameOver)

  const dispatch = useDispatch()
  const handleSetCursorPos = (cursorPos: AppState['state']['game']['cursorPos']) => {
    dispatch(Actions.setCursorPos(cursorPos))
  }
  const handleSetGameOver = (gameOver: boolean) => dispatch(Actions.setGameOver(gameOver))

  const divStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '100%',
    verticalAlign: 'top',
    backgroundColor: '#455a64',
    fontSize: 20,
    padding: 20,
  }

  return (
    <React.Fragment>
      <div style={divStyle}>
        <Game
          typingCode={typingCode}
          cursorPos={cursorPos}
          gameOver={gameOver}
          handleSetCursorPos={handleSetCursorPos}
          handleSetGameOver={handleSetGameOver}
        />
        <GameComment codeComment={codeComment}/>
      </div>
    </React.Fragment>
  )
}

export default GameContainer
