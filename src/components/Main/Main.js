import React, {Component} from 'react'

import { 
    Container,
    Button,
    Text
} from '../Helpers'

import {
    TwitPreview
} from '../TwitViews'

import history from '../../routes/history'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    mainView = () => (
        <div className="pages-container" >
            <Container>
                {
                    this.props.accounts.map(account => (
                        <TwitPreview key={account.id} {...account} onRemove={() => this.props.removeAccount(account.id)} />
                    ))
                }
            </Container>
            <Button onClick={() => history.push('/add')} >
                Add bot
            </Button>
        </div>
    )

    render = () => (
        this.props.accounts.length >= 1
        ? this.mainView()
        : <div className="pages-container" >
            <Container>
                <Text>
                    You don't have any accounts linked yet
                </Text>
            </Container>
            <Button onClick={() => history.push('/add')} >
                Add one?
            </Button>
        </div>
    )

}

export default Main