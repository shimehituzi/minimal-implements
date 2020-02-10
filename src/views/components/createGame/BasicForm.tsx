import React from 'react'
import { State } from '../../State'

type OwnProps = {
  gameFormInput: State['gameForm']
}

type Handler = {
  handleSetGameFormInput: (
    (gameFormInput: State['gameForm']) => void
  )
}

type Props = OwnProps & Handler

export const BasicForm: React.FC<Props> = props => {
  const onKeyDownFunc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  const onSetNameFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetGameFormInput({
      ...props.gameFormInput,
      name: e.target.value
    })
  }

  const onSetDescriptionFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.handleSetGameFormInput({
      ...props.gameFormInput,
      description: e.target.value
    })
  }

  return (
    <React.Fragment>
      <label>
        Name: <br/>
        <input type="text" value={props.gameFormInput.name} onChange={onSetNameFunc} onKeyDown={onKeyDownFunc} size={40}/>
      </label>
      <br/>
      <label>
        Description: <br/>
        <textarea value={props.gameFormInput.description} onChange={onSetDescriptionFunc} cols={100} rows={20}/>
      </label>
    </React.Fragment>
  )
}
