import React, { EventHandler, MouseEvent } from 'react'
import styled from 'styled-components'

import Button from 'components/Button'

export type AddToLineupButtonOwnProps = {
  pokemonName: string
}

type AddToLineupButtonProps = AddToLineupButtonOwnProps & {
  addToLineup: EventHandler<MouseEvent>
  isInLineup: boolean
  className?: string
}

const AddToLineupButton = ({
  addToLineup,
  isInLineup,
  className,
}: AddToLineupButtonProps) => {
  return (
    <div className={className}>
      {isInLineup ? (
        <span className="added-to-lineup">
          Added to lineup &nbsp;
          <span role="img" aria-label="ok">
            👌🏻
          </span>
        </span>
      ) : (
        <Button onClick={addToLineup}>Add to lineup</Button>
      )}
    </div>
  )
}

export default styled(AddToLineupButton)`
  .added-to-lineup {
    font-size: 0.9rem;
  }
`
