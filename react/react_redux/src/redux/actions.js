/*
* 包含了所有的action creator(action的工厂函数)
* */
import {ADD_COMMENT, DELETE_COMMENT} from './action-type'

export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})