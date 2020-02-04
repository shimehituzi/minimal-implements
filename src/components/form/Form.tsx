import React, { useState } from 'react'
import Editor from 'react-ace'

export const Form: React.FC = () => {
  const [inputSourceCode, setInputSourceCode] = useState<string[]>([''])

  const connectAsciiSouceCode = (lines: string[], row: number, col: number):string[] => {
    const beforewords: string = inputSourceCode.slice(row, row + 1)[0].slice(0, col)
    const afterwords: string = inputSourceCode.slice(row, row + 1)[0].slice(col)
    const beforelines: string[] = inputSourceCode.slice(0, row)
    const afterlines: string[] = inputSourceCode.slice(row + 1)
    if (lines.length > 1) {
      const startwords: string = beforewords + lines.slice(0, 1)
      const endworrds: string =  lines.slice(-1) +afterwords
      const middlelines: string[] = lines.slice(1, -1)
      const thislines: string[] = [startwords, ...middlelines, endworrds]
      return beforelines.concat(thislines, afterlines)
    } else {
      const thisline: string = beforewords + lines[0] + afterwords
      return [...beforelines, thisline, ...afterlines]
    }
  }
 
  const onAceValeuFunc = (fieldVal:string , event: any) => {
    if (event.action === 'insert') {
      const lines :string[] = event.lines
      if (lines.every((str) => str.match(/^[\n\x20-\x7e]*$/) !== null)) {
        setInputSourceCode(fieldVal.split('\n'))
      } else {
        const asciiLines :string[] = lines.map((str) => { return(
          str.split('').filter((chr) => chr.match(/^[\n\x20-\x7e]$/) !== null).join('')
        )})
        const row: number = event.start.row
        const col: number = event.start.column
        setInputSourceCode(connectAsciiSouceCode(asciiLines, row, col))
      }
    }
    if (event.action === 'remove') {
      setInputSourceCode(fieldVal.split('\n'))
    }
  }

  const inputSourceCodeString = inputSourceCode.join('\n')

  return (
    <Editor onChange={onAceValeuFunc} value={inputSourceCodeString}/>
  )
}
