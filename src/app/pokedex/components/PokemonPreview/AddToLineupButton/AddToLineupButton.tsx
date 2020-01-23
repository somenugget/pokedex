import React, { EventHandler, MouseEvent } from 'react'

export type AddToLineupButtonOwnProps = {
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
        Added to lineup
        <span role="img" aria-label="ok">
          👌🏻
        </span>
      </span>
    )
  }

  return <button onClick={addToLineup}>Add to lineup</button>
}

export default AddToLineupButton
