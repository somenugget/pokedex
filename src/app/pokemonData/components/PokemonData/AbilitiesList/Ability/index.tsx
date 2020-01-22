import { connect } from 'react-redux'

import Ability from './Ability'

const mapState = () => ({})

const mapDispatch = (dispatch: any) => ({
  setIsHidden: dispatch.pokemonData.setIsHidden,
  removeAbility: dispatch.pokemonData.removeAbility,
})

export default connect(mapState, mapDispatch)(Ability)
