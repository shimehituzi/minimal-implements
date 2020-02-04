import React from 'react'
import { Link } from 'react-router-dom'

interface SourceCode {
  id: number
  name: string
  description: string
}

interface OwnProps {
  sourceCodes: Array<SourceCode>
}

type Props = OwnProps

export const ReadSourceCode: React.FC<Props> = props => {
  return (
    <React.Fragment>
      {props.sourceCodes.map((sourceCode: SourceCode) => {
        return (
          <div key={sourceCode.id}>
            <Link to={"/Game/" + sourceCode.id}>{sourceCode.name}</Link>
          </div>
        )
      })}
    </React.Fragment>
  )
}
