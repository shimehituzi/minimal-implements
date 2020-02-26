import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { gamesActions } from '../../state/games'
import { Home } from '../components/home/Home'

type Alias = {
  formType: State['games']['formType']
}

const HomeContainer: React.FC = () => {
  const formType = useSelector<State, Alias['formType']>( state => state.games.formType )

  const dispatch = useDispatch()
  const handleSetFormType = useCallback(
    (formType: Alias['formType']) => {
      dispatch(gamesActions.setFromType(formType))
    }, [dispatch]
  )

  const _props = { formType, handleSetFormType }

  return (
    <Home { ..._props }/>
  )
}

export default HomeContainer
