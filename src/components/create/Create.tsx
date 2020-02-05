import React, {useState} from 'react'
// import { CodeForm } from './CodeForm'
// import { CodeCommentForm } from './CodeCommentForm'

interface FormValue {
  id: number
  name: string
  description: string
  code: string[]
  codeComment: string[]
}

const intialFromValue: FormValue = {
  id: -1,
  name: '',
  description: '',
  code: [''],
  codeComment: [''],
}

export const Create: React.FC = () => {
  const [formValue, setFormValue] = useState<FormValue>(intialFromValue)


  const onKeyDownNameFunc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  const onChangeNameFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, name: e.target.value })
  }
  
  const onChangeDescriptionFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue({ ...formValue, description: e.target.value })
  }

  const onSubmitFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }



  return (
    <form onSubmit={onSubmitFunc}>
      <label>
        Name: <br/>
        <input type="text" value={formValue.name} onKeyDown={onKeyDownNameFunc} onChange={onChangeNameFunc} size={40}/>
      </label>
      <br/>
      <label>
        Description: <br/>
        <textarea value={formValue.description} onChange={onChangeDescriptionFunc} cols={100} rows={20}/>
      </label>
      <br/><br/>
      <label>
        <input type="submit" value={"Create"}/>
      </label>
    </form>
  )
}