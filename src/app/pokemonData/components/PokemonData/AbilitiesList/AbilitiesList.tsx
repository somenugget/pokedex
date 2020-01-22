import React from 'react'

import { ConfiguredAbility } from 'app/models/pokemons'

import Ability from './Ability'

const AbilitiesList = ({ abilities = [] }: any) => {
  return (
    <div>
      {abilities.map(({ ability, is_hidden: isHidden }: ConfiguredAbility) => (
        <Ability key={ability.name} name={ability.name} isHidden={isHidden} />
      ))}
    </div>
  )
}

export default AbilitiesList
