import React from 'react'
import { State } from '../State'

type OwnProps = {
  value: State['data1']['value']
}

type Handler = {
  handleSetValue: ((value: State['data1']['value']) => void)
}

type Props = OwnProps & Handler

export const Component1: React.FC<Props> = props => {

  const onSetValueFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetValue(e.target.value)
  }

  return (
    <React.Fragment>
      <input onChange={onSetValueFunc} value={props.value}/>
      <div>{props.value}</div>
    </React.Fragment>
  )
}
