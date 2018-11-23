import React from 'react'
import PropTypes from 'prop-types' 

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = themes => ({
    button: {
        background: 'linear-gradient(35deg, #03a9f4 55%, #9ee1ff 95%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        flexGrow: 0,
        padding: '0 30px',
        boxShadow: '0 0 5px 2px #d8d8d8'
    }
})

const CustomButton = ({classes, onClick = () => {}, children, type = ''}) => (
    <Button type={type} className={classes.button} onClick={onClick} >
        {children}
    </Button>
)

export default withStyles(styles)(CustomButton)