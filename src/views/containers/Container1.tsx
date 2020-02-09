import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../State'
import { data1Actions } from '../../state/datas/data1'
import { Component1 } from '../components/Component1'

const Container1: React.FC = () => {
  const value = useSelector<State, State['data1']['value']>( state => state.data1.value )

  const dispatch = useDispatch()
  const handleSetValue = (value: State['data1']['value']) => {
    dispatch(data1Actions.setValue(value))
  }

  const _props = { value, handleSetValue }

  return (
    <Component1 { ..._props } />
  )
}

export default Container1
