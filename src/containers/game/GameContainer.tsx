import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../Store'
import { Actions } from '../../Actions'
import { Game } from '../../components/game/Game'
import { RouteComponentProps } from 'react-router-dom'

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

  return (
    <Game {..._props} {..._handler} />
  )
}

export default GameContainer
