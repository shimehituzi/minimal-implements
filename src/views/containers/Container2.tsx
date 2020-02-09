import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { data2Actions } from '../../state/datas/data2'
import { Component2 } from '../components/Component2'

const Container2: React.FC = () => {
  const value = useSelector<State, State['data2']['value']>( state => state.data2.value )

  const dispatch = useDispatch()
  const handleSetValue = (value: State['data2']['value']) => {
    dispatch(data2Actions.setValue(value))
  }

  const _props = { value, handleSetValue }

  return (
    <Component2 { ..._props } />
  )
}

export default Container2
