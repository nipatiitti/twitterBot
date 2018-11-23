import React from 'react'

import history from '../../routes/history'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core'

import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import {
  MdAccountCircle,
  MdMenu
} from 'react-icons/lib/md'

const styles = {
  root: {
    color: 'white'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  NavLink: {
    color: 'white',
    textDecoration: 'none'
  }
}

const Header = ({ classes, setMenu }) => (
  <AppBar className={classes.root} >
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => setMenu(true)} >
        <MdMenu size={30} />
      </IconButton>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        <NavLink to="/" className={classes.NavLink} >
          POTSI.fi twitter bot
        </NavLink>
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)