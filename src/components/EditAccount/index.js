import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {
    verifyAccount,
    tweet
} from '../../actions/accounts'

import {
    error
} from '../../actions/utils'

import EditAccount from './EditAccount'

const mapStateToProps = (state, props) => ({
    account: state.user.accounts.find(item => item.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    verifyAccount: account => (
        dispatch(verifyAccount( account ))
    ),
    tweet: (id, text, media, delay ) => (
        dispatch(tweet( id, text, media, delay ))
    ),
    error: text => (
        dispatch(error( text ))
    ),
})


const EditAccountContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditAccount))

export default EditAccountContainer