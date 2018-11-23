import { connect } from 'react-redux'

import Menu from './Menu'

import { setMenu } from '../../actions/utils'

const mapStateToProps = (state) => ({
    open: state.utils.menu
})

const mapDispatchToProps = (dispatch) => ({
    setMenu: bool => (
        dispatch( setMenu( bool ))
    )
})


const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)

export default MenuContainer