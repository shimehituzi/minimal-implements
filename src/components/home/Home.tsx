import React, {useState} from 'react'
import { CreateSourceCode } from './Create'
import { ReadSourceCode } from './Read'


interface OwnProps {
  nextID: number
  sourceCodes: (Array<{id:number,name:string,description:string}>)
}

interface Handler {
  handleSetNextID: Function
  handleSetSourceCodes: Function
}

type Props = OwnProps & Handler

export const Home: React.FC<Props> = props => {
  const [Hideflag, setHideFlag] = useState<boolean>(true)
  const [nameText, handleSetNameText] = useState<string>('')
  const [description, handleSetDescription] = useState<string>('')
  const handleSubmitSourceCode = (name: string, description: string) => {
    props.handleSetSourceCodes({id: props.nextID, name: name, description: description})
    console.log(props.nextID)
    props.handleSetNextID(props.nextID + 1)
  }
  const onHideFlagFunc = () => setHideFlag(!Hideflag)

  return (
    <React.Fragment>
      <ReadSourceCode sourceCodes={props.sourceCodes}/>
      <button onClick={onHideFlagFunc}>{ Hideflag ? "Create New SourceCode" : "Hide Create Form"}</button>
      { Hideflag ? <React.Fragment/> :
        <CreateSourceCode 
          name={nameText}
          description={description}
          handleSetName={handleSetNameText}
          handleSetDescription={handleSetDescription}
          handleSubmitSourceCode={handleSubmitSourceCode}
        /> 
      }
    </React.Fragment>
  )
}
