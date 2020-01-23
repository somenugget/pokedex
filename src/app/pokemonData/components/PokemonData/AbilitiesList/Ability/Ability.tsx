import React from 'react'
import styled from 'styled-components'

import Button from 'components/Button'

type AbilityProps = {
  name: string
  isHidden: boolean
  setIsHidden: (payload: any) => void
  removeAbility: (name: string) => void
  className?: string
}

const Ability = ({
  name,
  isHidden,
  setIsHidden,
  removeAbility,
  className,
}: AbilityProps) => {
  return (
    <div className={className}>
      <h5>{name}</h5>

      <label>
        <input
          type="checkbox"
          checked={isHidden}
          onChange={() => setIsHidden({ name, isHidden: !isHidden })}
        />
        &nbsp;
        {isHidden ? 'hidden' : 'visible'}
      </label>

      <Button onClick={() => removeAbility(name)}>remove</Button>
    </div>
  )
}

export default styled(Ability)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  h5 {
    margin: 0;
    text-transform: capitalize;
    width: 20%;
  }

  label {
    width: 20%;
    cursor: pointer;
  }
`
