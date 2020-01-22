import React, { EventHandler, MouseEvent } from 'react'
import { connect } from 'react-redux'

type AddToLineupButtonOwnProps = {
  pokemonName: string
}

type AddToLineupButtonProps = AddToLineupButtonOwnProps & {
  addToLineup: EventHandler<MouseEvent>
  isInLineup: boolean
}

const AddToLineupButton = ({
  addToLineup,
  isInLineup,
}: AddToLineupButtonProps) => {
  if (isInLineup) {
    return (
      <span>
        added to lineup
        <span role="img">👌🏻</span>
      </span>
    )
  }

  return <button onClick={addToLineup}>Add to lineup</button>
}

const mapState = (state: any, { pokemonName }: AddToLineupButtonOwnProps) => ({
  isInLineup: state.pokemonLineup.lineup.includes(pokemonName),
})

const mapDispatch = (
  dispatch: any,
  { pokemonName }: AddToLineupButtonOwnProps
) => ({
  addToLineup: () => {
    dispatch.pokemonLineup.addPokemon(pokemonName)
  },
})

export default connect(mapState, mapDispatch)(AddToLineupButton)
