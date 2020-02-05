import React from 'react'
import { Create } from '../../components/create/Create'

const CreateContainer: React.FC = () => {
  return (
    <Create
      id={0}
      name={''}
      description={''}
      code={['']}
      codeComment={['']}
    />
  )
}

export default CreateContainer
