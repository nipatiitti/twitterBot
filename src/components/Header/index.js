import { connect } from 'react-redux'

import Header from './Header'

import { setMenu } from '../../actions/utils'

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  setMenu: bool => (
    dispatch( setMenu( bool ))
  )
})


const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer