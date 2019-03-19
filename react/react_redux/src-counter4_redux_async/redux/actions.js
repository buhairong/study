/*
*  包含所有 action creator
*  同步的action都返回一个对象
*  异步的action返回的是一个函数
* */
import {INCREMENT, DECREMENT} from './action-types'

export const increment = (number) => ({type: INCREMENT, data: number})

export const decrement = (number) => ({type: DECREMENT, data: number})

export const incrementAsync = (number) => {
    return dispatch => {
        // 异步的代码
        setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    }
}