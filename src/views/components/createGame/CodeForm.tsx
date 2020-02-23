import React from 'react'
import Editor from 'react-ace'
import { State } from '../../State'

type Alias = {
  form: State['games']['form']
}

type OwnProps = {
  form: Alias['form']
}

type Handler = {
  handleSetForm: (
    (form: Alias['form']) => void
  )
}

type Props = OwnProps & Handler

export const CodeForm: React.FC<Props> = props => {

  const connectAsciiSouceCode = (lines: string[], row: number, col: number):string[] => {
    const value = props.form.code
    const beforewords: string = value.slice(row, row + 1)[0].slice(0, col)
    const afterwords: string = value.slice(row, row + 1)[0].slice(col)
    const beforelines: string[] = value.slice(0, row)
    const afterlines: string[] = value.slice(row + 1)
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
 
  const onChangeFunc = (inputVal: string , event: any) => {
    if (event.action === 'insert') {
      const lines :string[] = event.lines
      if (lines.every((str) => str.match(/^[\n\x20-\x7e]*$/) !== null)) {
        props.handleSetForm({
          ...props.form,
          code: inputVal.split('\n')
        })
      } else {
        const asciiLines :string[] = lines.map((str) => { return(
          str.split('').filter((chr) => chr.match(/^[\n\x20-\x7e]$/) !== null).join('')
        )})
        const row: number = event.start.row
        const col: number = event.start.column
        props.handleSetForm({
          ...props.form,
          code: connectAsciiSouceCode(asciiLines, row, col)
        })
        alert(
          "sorry this form don't allow non-ASCIi character input.\n\n" +
          "The characters that can be entered in this form are Only the characters corresponding to '\\x0a' and '\\x20' to '\\x7e' in hexadecimal ASCII code."
        )
      }
    }
    if (event.action === 'remove') {
      props.handleSetForm({
        ...props.form,
        code: inputVal.split('\n')
      })
    }
  }

  const value = props.form.code.join('\n')

  return (
    <Editor onChange={onChangeFunc} value={value} style={{display: 'inline-block', width: '50%'}}/>
  )
}
