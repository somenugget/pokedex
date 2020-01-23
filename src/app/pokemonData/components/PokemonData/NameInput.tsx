import React, { useCallback } from 'react'
import styled from 'styled-components'

type NameInputProps = {
  name: string
  changeName: (name: string) => void
  className?: string
}

const NameInput = ({ name, changeName, className }: NameInputProps) => {
  const handleNameChange = useCallback((e) => changeName(e.target.value), [])

  return (
    <input
      type="text"
      value={name}
      onChange={handleNameChange}
      className={className}
    />
  )
}

export default styled(NameInput)`
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.6rem 0.75rem;
  width: 100%;
`
