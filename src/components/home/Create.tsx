import React from 'react'
import { FormContainer } from '../../containers/form/FormContainer'

interface OwnProps {
  name: string
  description: string
}

interface Handler {
  handleSetName: Function
  handleSetDescription: Function
  handleSubmitSourceCode: Function 
}

type Props = OwnProps & Handler

export const CreateSourceCode: React.FC<Props> = props => {

  const onSetNameFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetName(e.target.value)
  }

  const onKeyDownFunc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  const onSetDescriptionFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.handleSetDescription(e.target.value)
  }

  const onSubmitSouceCodeFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (window.confirm("Dou you want to create?")) {
      props.handleSubmitSourceCode(props.name, props.description)
      props.handleSetName('')
      props.handleSetDescription('')
    }
  }

  return (
    <form onSubmit={onSubmitSouceCodeFunc}>
      <label>
        Description: <br/>
        <textarea value={props.description} onChange={onSetDescriptionFunc} cols={100} rows={20}/>
      </label>
      <br/>
      <label>
        Name: <br/>
        <input type="text" value={props.name} onChange={onSetNameFunc} size={40} onKeyDown={onKeyDownFunc}/>
      </label>
      <br/><br/>
      <FormContainer/>
      <br/><br/>
      <label>
        <input type="submit" value={"Create"}/>
      </label>
    </form>
  )
}
