import { connect } from 'react-redux'

import AbilitiesSelect from './AbilitiesSelect'

const mapState = (state: any) => ({
  abilities: state.abilities.list,
})

const mapDispatch = (dispatch: any) => ({
  addAbility: dispatch.pokemonData.addAbility,
})

export default connect(mapState, mapDispatch)(AbilitiesSelect)
