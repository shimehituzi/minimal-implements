import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../Store'
import { Actions } from '../../Actions'
import { Game } from '../../components/game/Game'
import { RouteComponentProps } from 'react-router-dom'

interface OwnProps extends RouteComponentProps<{id: string}> {}

type Props = OwnProps

const GameContainer: React.FC<Props> = props => {
  const gameTypedText = useSelector<AppState, string>((appState) => appState.state.gameTypedText)
  const gameRemainingText = useSelector<AppState, string>((appState) => appState.state.gameRemainingText)

  const dispatch = useDispatch()
  const handleSetGameTypedText = useCallback(
    (newGameTypedText: string) => dispatch(Actions.setGameTypedText(newGameTypedText)), [dispatch]
  )
  const handleSetGameRemainingText = useCallback(
    (newGameRemainingText: string) => dispatch(Actions.setGameRemainingText(newGameRemainingText)) , [dispatch]
  )

  const sourceCodes = useSelector<AppState, Array<{id:number,name:string,description:string}>>((appState) => appState.state.sourceCodes)

  useEffect(() => {
    const id = Number(props.match.params.id)
    const typingText = sourceCodes.find(x => x.id === id)?.description
    handleSetGameTypedText('')
    if (typingText !== undefined) {
      handleSetGameRemainingText(typingText)
    } else {
      handleSetGameRemainingText('Source code is not found')
    }
  }, [handleSetGameRemainingText, handleSetGameTypedText, props.match.params.id, sourceCodes])

  const _props = { gameTypedText, gameRemainingText, handleSetGameTypedText, handleSetGameRemainingText  }

  return (
    <Game {..._props} />
  )
}

export default GameContainer
