import React, {useEffect} from 'react'

interface OwnProps {
  typedCode: string[]
  remainingCode: string[]
}

interface Handler {
  handleSetTypedCode: (typedCode: string[]) => (void)
  handleSetRemainingCode: (remainingCode: string[]) => (void)
}

type Props = OwnProps & Handler

export const Game: React.FC<Props> = props => {

  useEffect(() => {
    props.handleSetTypedCode(['this', '  is', '    typed', 'code'])
    props.handleSetRemainingCode(['this', '    is', '  remaining', 'code'])
  }, [props])

  const preStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'top',
    outline: 'none'
  }

  const mappingFuncTyped = (line:string, index:number) => {
    return (
      <span style={{ color: 'white' }} key={index}>{line + '\n'}</span>
    )
  }

  const mappingFuncRemain = (line:string, index:number, arr:string[]) => {
    if ( arr.length - 1 === index ) {
      return <span style={{color: 'gray'}} key={index}>{line}</span> 
    } else {
      return <span style={{color: 'gray'}} key={index}>{line + '\n'}</span> 
    }
  }

  return (
    <pre tabIndex={0} style={preStyle}>
      { props.typedCode.slice(0, -1).map((v, i) => mappingFuncTyped(v, i)) }
      <span style={{ color: 'black', background: 'yellow' }}>
      </span>
      { props.remainingCode.slice(1).map((v, i, a) => mappingFuncRemain(v, i, a)) }
    </pre>
  )
}
