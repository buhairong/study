<template>
  <div>
    <p>click {{count}} times,count is {{evenOrOdd}}</p>
    <button @click="add">+</button>
    <button @click="jian">-</button>
    <button @click="oddNum">increment if odd</button>
    <button @click="async">increment async</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count : 0
      }
    },
    computed: {
      evenOrOdd() {
        return this.count%2===0?'偶数':'奇数'
      }
    },
    methods: {
      add() {
        ++this.count
      },
      jian() {
        --this.count
      },
      oddNum() {
        if(this.count%2===0){
          ++this.count
        }
      },
      async() {
        setTimeout(()=>{
          ++this.count
        },1000)
      }
    }
  }
</script>

<style>

</style>
