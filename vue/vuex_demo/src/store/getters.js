export default {
  totalCount (state) {
    return state.todos.length
  },
  completeCount (state) {
    return state.todos.reduce((preTotal,todo) => {
      return preTotal + (todo.complete?1:0)
    },0)
  },
  isAllCheck (state,getters) {
    return getters.totalCount === getters.completeCount && getters.totalCount > 0;
  }
}
