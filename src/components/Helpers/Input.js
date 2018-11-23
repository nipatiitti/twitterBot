import React from 'react'
import PropTypes from 'prop-types' 

import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    input: {
        marginBottom: '1em'
    }
})

const CustomInput = ({name, value, onChange, type = 'text', classes, autofocus = false, multiline = false }) => (
    <TextField
        className={classes.input}
        autoFocus={autofocus}
        error={value[`${name}_error`]}
        value={value[name]}
        type={type}
        multiline={multiline}
        label={name.replace(/^\w/, c => c.toUpperCase()).replace(/_/g, ' ')} // First capitalize then replace underlines
        onChange={onChange(name)}
        
    />
)


export default withStyles(styles)(CustomInput)