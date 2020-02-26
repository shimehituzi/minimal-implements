import React from 'react'
import { State } from '../../State'
import CreateGameContainer from '../../containers/CreateGameContainer'

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
  const onCreateFormFunc = () => {
    props.handleSetFormType("Create")
  }

  switch(props.formType) {
    case "Hidden":
      return <button onClick={onCreateFormFunc}>Create New Game</button>
    case "Create":
      return <CreateGameContainer/>
    case "Update":
      return <div>Update Form をここに作る</div>
  }
}
