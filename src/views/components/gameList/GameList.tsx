import React from 'react'
import { Link } from 'react-router-dom'
import { State } from '../../State'

type Alias = {
  games: State['games']['games']
  form: State['games']['form']
  formType: State['games']['formType']
  id: State['games']['games'][0]['id']
}

type OwnProps = {
  games: Alias['games']
}

type Handler = {
  handleDestroyGame: (
    (games: Alias['games'], id: Alias['id']) => void
  )
  handleSetform: (
    (form: Alias['form']) => void
  )
  handleSetformType: (
    (formType: Alias['formType']) => void
  )
}

type Props = OwnProps & Handler

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

  const onDestroyGameFunc = (id: Alias['id']) => () => {
    props.handleDestroyGame(props.games, id)
    props.handleSetformType('Hidden')
  }

  const onEditFunc = (form: Alias['form']) => () => {
    props.handleSetformType('Update')
    props.handleSetform(form)
  }

  return (
    <React.Fragment>
      { props.games.map((val) => {
        return (
          <div key={val.id} style={{backgroundColor: "#FFFDE7", borderRadius: 30, margin: 20}}>
            <Link to={'/Game/' + val.id}><h3 style={headStyle}>{val.name}</h3></Link>
            <p style={{color: "#BDBDBD", marginLeft: 40}}>{val.description}</p><br/>
            <button onClick={onDestroyGameFunc(val.id)}>{ `Delete ${val.name}` }</button>
            <button onClick={onEditFunc(val)}>{ `Edit ${val.name}` }</button>
          </div>
        )
      }) }
    </React.Fragment>
  )
}
