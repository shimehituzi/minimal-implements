import React from 'react'
import { Form } from '../../components/form/Form'
import { FormComment } from '../../components/form/FormComment'

export const FormContainer: React.FC = () => {
  return (
    <div style={{display: 'inline-block', width: '1000px'}}>
      <Form/>
      <FormComment/>
    </div>
  )
}
