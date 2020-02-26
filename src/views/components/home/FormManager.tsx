import React from 'react'
import { State } from '../../State'
import CreateGameContainer from '../../containers/CreateGameContainer'
import UpdateGameContainer from '../../containers/UpdateGameContainer'

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

export const FormManager: React.FC<Props> = props => {
  const onSetFormTypeFunc = (formType: Alias['formType']) => () => {
    props.handleSetFormType(formType)
  }

  switch(props.formType) {
    case "Hidden":
      return (
        <button onClick={onSetFormTypeFunc('Create')}>Create New Game</button>
      )
    case "Create":
      return (
        <React.Fragment>
          <button onClick={onSetFormTypeFunc('Hidden')}>Close</button>
          <CreateGameContainer/>
        </React.Fragment>
      )
    case "Update":
      return (
        <React.Fragment>
          <button onClick={onSetFormTypeFunc('Hidden')}>Close</button>
          <UpdateGameContainer/>
        </React.Fragment>
      )
  }
}
