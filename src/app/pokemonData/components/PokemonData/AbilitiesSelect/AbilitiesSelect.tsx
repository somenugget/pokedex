import React, { useCallback, useMemo } from 'react'

import Select from 'components/Select'

const AbilitiesSelect = ({ abilities, addAbility }: any) => {
  const options = useMemo(
    () =>
      abilities.map(({ name }: any) => ({
        value: name,
        label: name,
      })),
    [abilities.length]
  )

  const addPokemonAbility = useCallback(({ value }) => addAbility(value), [])

  return (
    <Select
      options={options}
      onChange={addPokemonAbility}
      placeholder="Add an ability for your pokemon"
    />
  )
}

export default AbilitiesSelect
