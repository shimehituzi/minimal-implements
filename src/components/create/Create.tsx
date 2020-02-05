import React from 'react'
import { CodeForm } from './CodeForm'
import { CodeCommentForm } from './CodeCommentForm'

interface OwnProps {
  name: string
  description: string
  code: string[]
  codeComment: string[]
}

interface Handler {
  handleSetName: Function
  handleSetDescription: Function
  handleSetCode: Function
  handleSetCodeComment: Function
}

type Props = OwnProps & Handler

export const Create: React.FC<Props> = props => {
  const onKeyDownNameFunc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  const onChangeNameFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetName(e.target.value)
  }

  const onChangeDescriptionFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.handleSetDescription(e.target.value)
  }

  const onSubmitFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmitFunc}>
      <label>
        Name: <br/>
        <input type="text" value={props.name} onKeyDown={onKeyDownNameFunc} onChange={onChangeNameFunc} size={40}/>
      </label>
      <br/>
      <label>
        Description: <br/>
        <textarea value={props.description} onChange={onChangeDescriptionFunc} cols={100} rows={20}/>
      </label>
      <br/><br/>
      <div style={{display: 'inline-block', width: 1000}}>
        <CodeForm value={props.code} setCode={props.handleSetCode}/>
        <CodeCommentForm value={props.codeComment} setCodeComment={props.handleSetCodeComment}/>
      </div>
      <br/><br/>
      <label>
        <input type="submit" value={"Create"}/>
      </label>
    </form>
  )
}
