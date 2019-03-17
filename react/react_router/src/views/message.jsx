import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import MessageDetail from './message-detail'
import MyNavLink from '../components/MyNavLink'

export default class Message extends Component {

    state = {
        messages: []
    }

    componentDidMount () {
        setTimeout(() => {
            const messages =  [
               {id: 1, title: 'message001'},
               {id: 3, title: 'message003'},
               {id: 5, title: 'message005'},
               {id: 6, title: 'message006'}
            ]
            this.setState({messages})
        } ,1000)
    }

    render () {
        return (
            <div>
                <ul>
                    {this.state.messages.map((m, index) => (
                        <li key={index}>
                            <MyNavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                        </li>
                    ))}
                </ul>
                <Route path="/home/message/messagedetail/:id" component={MessageDetail} />
            </div>
        )
    }
}