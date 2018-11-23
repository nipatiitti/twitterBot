import React from 'react'

import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    withStyles,
    Divider
} from '@material-ui/core'

import history from '../../routes/history'

import {
    MdPersonAdd,
    MdSend
} from 'react-icons/lib/md'

const styles = {
    list: {
        width: '250px'
    }
}

const Menu = ({ classes, open, setMenu}) => (
    <Drawer anchor="left" open={open} onClose={() => setMenu(false)}>
    <div className={classes.list}>
        <List>
            <ListItem button key={'add account'} onClick={() => history.push('add')} >
                <ListItemIcon><MdPersonAdd size={20} /></ListItemIcon>
                <ListItemText primary='Add account' />
            </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
)

export default withStyles(styles)(Menu)