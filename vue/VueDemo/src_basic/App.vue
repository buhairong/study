<template>
  <!--<div class="todo-container">
    <div class="todo-wrap">
      &lt;!&ndash;<TodoHeader :addTodo="addTodo"/>&ndash;&gt;
      &lt;!&ndash;<TodoHeader @addTodo="addTodo"/>&ndash;&gt;
      <TodoHeader ref="header"/>
      &lt;!&ndash;<TodoList :todos="todos" :deleteTodo="deleteTodo"/>&ndash;&gt;
      <TodoList :todos="todos"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
      <TodoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </TodoFooter>

    </div>
  </div>-->
  <!--<div>
      <div v-if="!repoUrl">loading...</div>
      <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>-->
  <div class="container">
    <Search />
    <UsersMain />
  </div>
</template>

<script>
  /*import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import storageUtil from './util/storageUtil'*/

  import Search from './components/Search.vue'
  import Main from './components/Main.vue'

  export default {
    components: {
      Search,
      UsersMain:Main
    }

    /*data() {
      return {
        repoUrl:'',
        repoName:''
      }
    },
    mounted () {
      const url = `https://api.github.com/search/repositories?q=v&sort=stars`;
      /!*this.$http.get(url).then(
        response => {
          const result = response.data;
          const mostRepo = result.items[0];
          this.repoUrl = mostRepo.html_url;
          this.repoName = mostRepo.name;
        },
        reponse => {
          alert('请求失败');
        }
      )*!/

      axios.get(url).then(response => {
        const result = response.data;
        const mostRepo = result.items[0];
        this.repoUrl = mostRepo.html_url;
        this.repoName = mostRepo.name;
      }).catch(error => {
        alert('请求失败1');
      })
    }*/

    /*data () {
      return {
        todos:storageUtil.readTodos()
      }
    },
    computed:{
      completeSize () {
        return this.todos.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0);
      },
      isAllCheck:{
        get () {
          return this.completeSize === this.todos.length && this.completeSize > 0;
        },
        set (value) {
          this.selectAllTodos(value);
        }
      }
    },
    mounted () {
      this.$refs.header.$on('addTodo',this.addTodo);

      PubSub.subscribe('deleteTodo',(msg,index) => {
        this.deleteTodo(index);
      })
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo);
      },
      deleteTodo(index){
        this.todos.splice(index,1);
      },
      deleteCompleteTodos(){
        this.todos = this.todos.filter(todo => !todo.complete);
      },
      selectAllTodos(check){
        this.todos.forEach(todo => todo.complete = check);
      }
    },
    watch:{
      todos:{
        deep:true,
        /!*handler:function(value){
          //localStorage.setItem('todos_key',JSON.stringify(value));
          storageUtil.saveTodos(value);
        }*!/
        handler:storageUtil.saveTodos
      }
    },
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    }*/
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
