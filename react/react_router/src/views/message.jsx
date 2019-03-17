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
        }, 1000)
    }

    showDetail = (id) => {
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }

    showDetail2 = (id) => {
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    reqPage = () => {
        window.location = 'http://www.baidu.com'
    }

    render () {
        return (
            <div>
                <ul>
                    {this.state.messages.map((m, index) => (
                        <li key={index}>
                            <MyNavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                            &nbsp;&nbsp;<button onClick={() => this.showDetail(m.id)}>push查看</button>
                            &nbsp;&nbsp;<button onClick={() => this.showDetail2(m.id)}>replace查看</button>
                        </li>
                    ))}
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前进</button>
                </p>
                <p>
                    <button onClick={this.reqPage}>页面跳转</button>
                </p>
                <Route path="/home/message/messagedetail/:id" component={MessageDetail} />
            </div>
        )
    }
}