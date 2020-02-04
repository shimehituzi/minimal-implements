import React, { useState } from 'react'
import Editor from 'react-ace'

export const Form: React.FC = () => {
  const [aceValue, setAceValue] = useState<string>('')
  const [valueArray, setValueArray] = useState<string[]>([])
  const returnAceValueText = (lines: string[]):string => {
    const currentline: string = lines.slice(-1)[0]
    const beforeline: string[] = lines.slice(0, -1)
    const resText: string = beforeline.length > 0 ?
      beforeline.join('\n') + '\n' + currentline : currentline
    return resText
  }

  const returnArray = (lines: string[], row: number, col: number):string[] => {
    const beforelines: string[] = valueArray.slice(0, row)
    const beforewords: string = valueArray.slice(row, row + 1)[0].slice(0, col)
    const afterwords: string = valueArray.slice(row, row + 1)[0].slice(col)
    const afterlines: string[] = valueArray.slice(row + 1)
    const startwords: string = beforewords + lines.slice(0, 1)
    const endworrds: string =  lines.slice(-1) +afterwords
    const middlelines: string[] = lines.slice(1, -1)
    const thislines: string[] = [startwords, ...middlelines, endworrds]
    return beforelines.concat(thislines, afterlines)
  }
 
  const onAceValeuFunc = (value:string , event: any) => {
    setAceValue(value)
    if (event.action === 'insert') {
      const lines :string[] = event.lines
      if (lines.every((str) => str.match(/^[\n\x20-\x7e]*$/) !== null)) {
        setAceValue(value)
        setValueArray(value.split('\n'))
      } else {
        const filteredLines :string[] = lines.map((str) => { return(
          str.split('').filter((chr) => chr.match(/^[\n\x20-\x7e]$/) !== null).join('')
        )})
        setAceValue(aceValue + returnAceValueText(filteredLines))
        const row: number = event.start.row
        const col: number = event.start.col
        setValueArray(returnArray(filteredLines, row, col))
      }
    }
    if (event.action === 'remove') {
      setValueArray(value.split('\n'))
    }
  }

  const aceValueArray = valueArray.join('\n')

  return (
    <React.Fragment>
      <Editor onChange={onAceValeuFunc} value={aceValue}/>
      <Editor value={aceValueArray}/>
    </React.Fragment>
  )
}
