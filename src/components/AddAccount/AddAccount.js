import React, { Component } from 'react'

import history from '../../routes/history'

import {
    Input,
    Container,
    Button
} from '../Helpers'

class AddAccount extends Component {
    constructor(props) {
        super(props)


        this.state = {
            consumer_key: '',
            access_token: '',
            consumer_secret: '',
            access_token_secret: '',

            consumer_key_error: false,
            access_token_error: false,
            consumer_secret_error: false,
            access_token_secret_error: false
        }
    }

    makeId = () => {
        let text = ""
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        return text
    }

    onChange = name => e => {
        this.setState({
            [name]: e.target.value,
            [`${name}_error`]: false
        })
    }

    addAccount = async () => {
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

        this.props.addAccount({
            consumer_key,
            consumer_secret,
            access_token,
            access_token_secret,
            name: '',
            loading: true,
            verified: false,
            id: this.makeId()
        })

        history.push('/')
    }

    render = () => (
        <div className="pages-container" >
            <Container wide >
                <Input
                    value={this.state}
                    onChange={this.onChange}
                    name="consumer_key"
                />
                <Input
                    value={this.state}
                    onChange={this.onChange}
                    name="consumer_secret"
                />
                <Input
                    value={this.state}
                    onChange={this.onChange}
                    name="access_token"
                />
                <Input
                    value={this.state}
                    onChange={this.onChange}
                    name="access_token_secret"
                />
            </Container>
            <Button onClick={this.addAccount} >
                Add account
            </Button>
        </div>
    )

}

export default AddAccount