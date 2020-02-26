import React from 'react'
import { State } from '../../State'
import GameListContainer from '../../containers/GameListContainer'
import { FormManager } from './FormManager'

type Alias = {
  formType: State['games']['formType']
}

type OwnProps = {
  formType: Alias['formType']
}

type Handler = {
  handleSetFormType: (
    (formType: Alias['formType']) => void
  )
}

type Props = OwnProps & Handler

export const Home: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <GameListContainer />
      <hr/>
      <FormManager { ...props }/>
    </React.Fragment>
  )
}
