import React from 'react'

type AbilityProps = {
  name: string
  isHidden: boolean
  setIsHidden: (payload: any) => void
  removeAbility: (name: string) => void
}

const Ability = ({
  name,
  isHidden,
  setIsHidden,
  removeAbility,
}: AbilityProps) => {
  return (
    <div>
      {name}

      <input
        type="checkbox"
        checked={isHidden}
        onChange={() => setIsHidden({ name, isHidden: !isHidden })}
      />
      {isHidden ? 'hidden' : 'visible'}

      <button onClick={() => removeAbility(name)}>remove</button>
    </div>
  )
}

export default Ability
