import React, { useCallback } from 'react'

type NameInputProps = {
  name: string
  changeName: (name: string) => void
}

const NameInput = ({ name, changeName }: NameInputProps) => {
  const handleNameChange = useCallback((e) => changeName(e.target.value), [])

  return <input type="text" value={name} onChange={handleNameChange} />
}

export default NameInput
