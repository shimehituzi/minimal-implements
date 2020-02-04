import React, { useState } from 'react'
import Editor from 'react-ace'

export const Form: React.FC = () => {
  const asciiOnlyFlag = true
  const [aceValue, setAceValue] = useState<string>('')
  const returnAceValueText = (lines: string[]):string => {
    const currentline: string = lines.slice(-1)[0]
    const beforeline: string[] = lines.slice(0, -1)
    const resText: string = beforeline.length > 0 ?
      beforeline.join('\n') + '\n' + currentline : currentline
    return resText
  }

  const onAceValeuFunc = (value:string , event: any) => {
    setAceValue(value)
    if (asciiOnlyFlag && event.action === 'insert') {
      const lines :string[] = event.lines
      if (lines.every((str) => str.match(/^[\n\x20-\x7e]*$/) !== null)) {
        setAceValue(aceValue + returnAceValueText(lines))
      } else {
        const filteredLines :string[] = lines.map((str) => { return(
          str.split('').filter((chr) => chr.match(/^[\n\x20-\x7e]$/) !== null).join('')
        )})
        setAceValue(aceValue + returnAceValueText(filteredLines))
      }
    } 
  }

  return (
    <Editor onChange={onAceValeuFunc} value={aceValue} />
  )
}
