import React from 'react'

const allMessages = [
    {id: 1, title: 'message001', content: '我爱你，中国'},
    {id: 3, title: 'message003', content: '我爱你，老婆'},
    {id: 5, title: 'message005', content: '我爱你，孩子'},
    {id: 6, title: 'message006', content: '我爱你，父母'}
]

export default function MessageDetail (props) {
    // 得到请求参数中的id
    const {id} = props.match.params
    const message = allMessages.find((m) => m.id === id*1)// 返回第一个结果为true的数组元素

    return (
        <ul>
            <li>ID: {message.id}</li>
            <li>TITLE: {message.title}</li>
            <li>CONTENT: {message.content}</li>
        </ul>
    )
}