import React, { Fragment } from 'react'

import history from '../../routes/history'

import {
    CircularProgress,
    Avatar,
    Divider
} from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'

import {
    green,
    pink
} from '@material-ui/core/colors'

import {
    MdCheck,
    MdErrorOutline,
    MdRemove
} from 'react-icons/lib/md'

const styles = {
    avatar: {
      margin: 10,
    },
    pinkAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: pink[500],
    },
    greenAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: green[500],
    },
    row: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer'
    },
}

const Twit = ({id, name, loading, verified, classes, onRemove = () => {}}) => (
    <Fragment>
        <div className={classes.row} onClick={() => history.push(`/edit/${id}`)} >
            {loading
                ? <CircularProgress className={classes.avatar} size={20} />
                : verified
                    ? <Avatar className={classes.greenAvatar}><MdCheck size={20} /></Avatar>
                    : <Avatar className={classes.pinkAvatar}><MdErrorOutline size={20} /></Avatar>
            }
            <p style={{flex: 1}} >
                Bot: {name !== '' ? name : ' --- '} Id: {id}
            </p>
            <div className={classes.pinkAvatar} >
                <MdRemove size={20} onClick={onRemove} />
            </div>
        </div>
        <Divider />
    </Fragment>
)

export default withStyles(styles)(Twit)