import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { AppState } from '../../Store'
import { Actions } from '../../Actions'
import { Game } from '../../components/game/Game'
import { GameComment } from '../../components/game/GameComment'

interface OwnProps extends RouteComponentProps<{id: string}> {}

type Props = OwnProps

const GameContainer: React.FC<Props> = props => {
  const typedCode = useSelector<AppState, string>((appState) => appState.state.game.typedCode)
  const remainingCode = useSelector<AppState, string>((appState) => appState.state.game.remainingCode)

  const dispatch = useDispatch()
  const handleSetTypedCode = useCallback(
    (typedCode: string) => dispatch(Actions.setTypedCode(typedCode)), [dispatch]
  )
  const handleSetRemainingCode = useCallback(
    (remainingCode: string) => dispatch(Actions.setRemainingCode(remainingCode)) , [dispatch]
  )

  const sourceCodes = useSelector<AppState, AppState['state']['read']['sourceCodes']>((appState) => appState.state.read.sourceCodes)
  const tmp = sourceCodes.find(x => x.id === Number(props.match.params.id))?.codeComment.join('\n')
  const codeComment = tmp !== undefined ? tmp : 'ソースコードが見つかりませんでした'


  useEffect(() => {
    const id = Number(props.match.params.id)
    const typingText = sourceCodes.find(x => x.id === id)?.code.join('\n')
    handleSetTypedCode('')
    if (typingText !== undefined) {
      handleSetRemainingCode(typingText)
    } else {
      handleSetRemainingCode('Source code is not found')
    }
  }, [handleSetRemainingCode, handleSetTypedCode, props.match.params.id, sourceCodes])

  const _props = { typedCode, remainingCode }
  const _handler = { handleSetTypedCode, handleSetRemainingCode }

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
        <Game {..._props} {..._handler} />
        <GameComment codeComment={codeComment}/>
      </div>
    </React.Fragment>
  )
}

export default GameContainer
