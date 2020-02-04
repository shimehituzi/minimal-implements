import React, { useState } from 'react'

export const Form: React.FC = () => {
  const asciiOnlyFlag = true
  const [value, setValue] = useState<string>('')

  const onSetAnyValueFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (asciiOnlyFlag) {
      const str: string = e.target.value
      if (str.match(/^[\n\x20-\x7e]*$/) !== null) {
        setValue(str)
      } else {
        setValue(
          str
          .split('')
          .filter(char => char.match(/^[\n\x20-\x7e]$/) !== null)
          .join('')
        )
      }
    } else {
      setValue(e.target.value)
    }
  }

  return (
    <textarea onChange={onSetAnyValueFunc} value={value}/>
  )
}
