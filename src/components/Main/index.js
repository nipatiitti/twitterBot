import { connect } from 'react-redux'

import {
    removeAccount
} from '../../actions/accounts'

import Main from './Main'

const mapStateToProps = (state) => ({
    accounts: state.user.accounts
})

const mapDispatchToProps = (dispatch) => ({
    removeAccount: id => (
        dispatch( removeAccount ( id ) )
    )
})


const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default MainContainer