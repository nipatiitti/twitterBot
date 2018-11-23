import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types' 

import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import ErrorIcon from 'react-icons/lib/md/error-outline'

const styles = theme => ({
    error: {
        backgroundColor: theme.palette.error.dark
    },
    errorText: {
        color: 'white'
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    }
})

class Error extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Fragment>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.props.error.open}
                    
                >
                    <SnackbarContent
                        className={this.props.classes.error}
                        message={(
                            <div className={this.props.classes.container} >
                                <ErrorIcon className='icon' />
                                <span className={this.props.classes.errorText}>
                                    {this.props.error.text}
                                </span>
                            </div>
                        )}
                    />
                </Snackbar>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.props.message.open}
                    message={(
                        <span>
                            {this.props.message.text}
                        </span>
                    )}   
                />
            </Fragment>
        )
    }
}

Error.propTypes = {
}


export default withStyles(styles)(Error)