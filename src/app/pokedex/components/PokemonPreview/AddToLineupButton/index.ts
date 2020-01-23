import { connect } from 'react-redux'

import AddToLineupButton, {
  AddToLineupButtonOwnProps,
} from './AddToLineupButton'

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
