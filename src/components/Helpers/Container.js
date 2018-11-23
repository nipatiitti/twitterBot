import React from 'react'

import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    paper: {
        padding: '1em',
        margin: '4.5em 0.5em 3em 0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

const containerStyle = (wide, slim) => {
    let className = ''

    if(wide)
        className += 'wide '
    else
        className += 'shallow '
    
    if(slim)
        className += 'slim '

    return className
}

const Container = ({classes, children, wide = false, slim = false}) => (
    <div className='paperContainer' >
        <div className={containerStyle(wide, slim)} >
            <Paper className={classes.paper} elevation={10} >
                {children}
            </Paper>
        </div>
    </div>
)


export default withStyles(styles)(Container)