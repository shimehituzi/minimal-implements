import React from 'react'
import { State } from '../../State'

type OwnProps = {
  form: State['games']['form']
}

type Handler = {
  handleSetForm: (
    (form: State['games']['form']) => void
  )
}

type Props = OwnProps & Handler

export const BasicForm: React.FC<Props> = props => {
  const onKeyDownFunc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  const onChangeFunc = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    props.handleSetForm({
      ...props.form,
      [e.target.id]: e.target.value
    })
  }

  return (
    <React.Fragment>
      <label>
        Name: <br/>
        <input type="text" id="name" value={props.form.name} onChange={onChangeFunc} onKeyDown={onKeyDownFunc} size={40}/>
      </label>
      <br/>
      <label>
        Description: <br/>
        <textarea id="description" value={props.form.description} onChange={onChangeFunc} cols={100} rows={20}/>
      </label>
    </React.Fragment>
  )
}
