import React, {Component} from 'react'

export default class Main extends Component {

    state = {
        initView: true
        loading: false,
        users: null,
        errorMsg: null
    }

    render () {
        const {initView, loading, users, errorMsg} = this.state

        if (initView) {
            return <h2>请输入关键字进行搜索</h2>
        } else if (loading) {
            return <h2>正在请求中...</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card">
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}