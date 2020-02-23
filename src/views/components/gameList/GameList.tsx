import React from 'react'
import { Link } from 'react-router-dom'
import { State } from '../../State'

type Alias = {
  games: State['games']['games']
}

type OwnProps = {
  games: Alias['games']
}

type Props = OwnProps

export const GameList: React.FC<Props> = props => {
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
      { props.games.map((val) => {
        return (
          <div key={val.id} style={{backgroundColor: "#FFFDE7", borderRadius: 30, margin: 20}}>
            <Link to={'/Game/' + val.id}><h3 style={headStyle}>{val.name}</h3></Link>
            <p style={{color: "#BDBDBD", marginLeft: 40}}>{val.description}</p><br/>
          </div>
        )
      }) }
    </React.Fragment>
  )
}
