import React from 'react'
import { State } from '../../Actions'
import {Link} from 'react-router-dom'

interface OwnProps {
  sourceCodes: State['read']['sourceCodes']
}

type Props = OwnProps

export const Read: React.FC<Props> = props => {
  const headStyle: React.CSSProperties = {
    margin: 20,
    marginBottom: 0,
    padding: 15,
    borderRadius: 30,
    background: '#F57C00',
    color: '#FFFFFF',
    display: 'inline-block'
  }

  return (
    <React.Fragment>
      { props.sourceCodes.map((val) => {
        return (
          <div key={val.id} style={{backgroundColor: "#FFE0B2", borderRadius: 30, margin: 20}}>
            <Link to={'/Game/' + val.id}><h3 style={headStyle}>{val.name}</h3></Link>
            <p style={{color: "#BDBDBD", marginLeft: 40}}>{val.description}</p><br/>
          </div>
        )
      }) }
    </React.Fragment>
  )
}
