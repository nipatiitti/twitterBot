import { connect } from 'react-redux'

import AddAccount from './AddAccount'

import { addAccount } from '../../actions/accounts'

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    addAccount: account => (
        dispatch( addAccount( account ) )
    )
})


const AddAccountContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAccount)

export default AddAccountContainer