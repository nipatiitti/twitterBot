import axios from 'axios'
import merge from 'deepmerge'

import { baseUrl, error, message } from './utils'

export const addAccount = account => dispatch => {
    dispatch(addAccountToProps(account))
    dispatch(verifyAccount(account))
}

export const tweet = (id, tweet, media, delay) => (dispatch, getState) => {
    axios.post(`${baseUrl}/api`, {
        ...getState().user.accounts.find(item => item.id === id),
        tweet,
        media: media ? media : null,
        delay
    })
        .then(({data}) => {
            dispatch(message('Successfully tweeted!'))
        })
        .catch(e => {
            if(e.response) {
                dispatch(error(typeof e.response.data.message === 'string' ? e.response.data.message : 'Server error'))
            } else {
                dispatch(error(e.message))
            }
        })
}

export const verifyAccount = account => dispatch => {
    const {
        consumer_key,
        consumer_secret,
        access_token,
        access_token_secret
    } = account

    axios.post(`${baseUrl}/api/verify`, {
        consumer_key,
        consumer_secret,
        access_token,
        access_token_secret
    })
        .then(({data}) => {
            dispatch(editAccount(account.id, merge( account, data)))
        })
        .catch(e => {
            if(e.response) {
                dispatch(editAccount(account.id, merge( account, e.response.data)))
            } else {
                dispatch(error('server error'))
            }
        })
}

const addAccountToProps = account => ({
    type: 'ADD_ACCOUNT',
    account
})

export const editAccount = (id, account) => ({
    type: 'EDIT_ACCOUNT',
    id,
    account
})

export const removeAccount = id => ({
    type: 'REMOVE_ACCOUNT',
    id
})