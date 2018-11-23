import React, { Component, Fragment } from 'react'

import history from '../../routes/history'

import {
    Container,
    Input,
    Button
} from '../Helpers'

import {
    Checkbox
} from '@material-ui/core'

class EditAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tweet: '',
            media: '',
            name: '',
            delaySelected: false,
            delay_in_hours: 2,

            consumer_key: props.account ? props.account.consumer_key : '',
            access_token: props.account ? props.account.access_token : '',
            consumer_secret: props.account ? props.account.consumer_secret : '',
            access_token_secret: props.account ? props.account.access_token_secret : '',

            consumer_key_error: false,
            access_token_error: false,
            consumer_secret_error: false,
            access_token_secret_error: false
        }
    }

    onChange = name => e => {
        if(name === 'tweet') {
            this.setState({
                [name]: e.target.value.substring(0, 140)
            })
        } else {
            this.setState({
                [name]: e.target.value
            })
        }
    }

    onTokenChange = name => e => {
        this.setState({
            [name]: e.target.value,
            [`${name}_error`]: false
        })
    }

    addMedia = e => {
        const file = e.target.files[0]
        if(!file) {
            return
        }

        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            this.setState({
                media: reader.result,
                name: file.name
            })
        }
        reader.onerror = (error) => {
            console.error(error)
        }
    }

    verifyAccount = () => {
        const {
            consumer_key,
            access_token,
            consumer_secret,
            access_token_secret
        } = this.state

        if(consumer_key === '') {
            this.setState({
                consumer_key_error: true
            })
            return 
        } else if(access_token === '') {
            this.setState({
                access_token_error: true
            })
            return 
        } else if(consumer_secret === '') {
            this.setState({
                consumer_secret_error: true
            })
            return 
        } else if(access_token_secret === '') {
            this.setState({
                access_token_secret_error: true
            })
            return 
        }

        this.props.verifyAccount(Object.assign({}, this.props.account,  {
            consumer_key,
            consumer_secret,
            access_token,
            access_token_secret,
            loading: true
        }))

        history.push('/')
    }

    componentDidMount = () => {
        if(!this.props.account) {
            history.push('/')
        }
    }

    componentDidUpdate = () => {
        if(!this.props.account) {
            history.push('/')
        }
    }

    valid = () => (
        <Fragment>
            <div>
                <label htmlFor="image_upload" id="addphoto"><p style={{textAlign: 'center', textDecoration: 'underline', cursor: 'pointer'}} >ADD MEDIA</p></label>
                <input id="image_upload" type="file" name="image" style={{display: 'none'}} onChange={this.addMedia} />
                <p>{this.state.name}</p>
            </div>
            <Input
                value={this.state}
                onChange={this.onChange}
                name='tweet'
            />
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}} >
                <Checkbox value={'delaySelected'} checked={this.state.delaySelected} onChange={() => this.setState(oldState => ({delaySelected: !oldState.delaySelected}))} />
                <p>Add delay?</p>
            </div>
            {this.state.delaySelected &&
                <Input
                    value={this.state}
                    onChange={this.onChange}
                    name='delay_in_hours'
                    type='number'
                />
            }
            <Button onClick={() =>
                this.props.tweet(
                    this.props.account.id,
                    this.state.tweet,
                    this.state.media !== '' ? this.state.media : null,
                    this.state.delaySelected ? this.state.delay_in_hours : null
            )}>
                Tweet!
            </Button>
        </Fragment>
    )

    invalid = () => (
        <Fragment>
            <Input
                value={this.state}
                onChange={this.onTokenChange}
                name="consumer_key"
            />
            <Input
                value={this.state}
                onChange={this.onTokenChange}
                name="consumer_secret"
            />
            <Input
                value={this.state}
                onChange={this.onTokenChange}
                name="access_token"
            />
            <Input
                value={this.state}
                onChange={this.onTokenChange}
                name="access_token_secret"
            />
            <Button onClick={this.verifyAccount} >
                Save
            </Button>
        </Fragment>
    )

    render = () => this.props.account ? (
        <Container>
            {this.props.account.verified
                ? this.valid()
                : this.invalid()
            }
        </Container>
    ) : null

}

export default EditAccount