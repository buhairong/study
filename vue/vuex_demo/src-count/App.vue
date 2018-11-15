<template>
  <div>
    <p>click {{$store.state.count}} times,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'

  export default {

    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd']),
      /*evenOrOdd () {
        return this.$store.getters.evenOrOdd
      },
      count () {
        return this.$store.state.count
      }*/
    },
    methods: {
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    }
   /* methods: {
      add() {
        this.$store.dispatch('increment')
      },
      jian() {
        this.$store.dispatch('decrement')
      },
      oddNum() {
        this.$store.dispatch('incrementIfOdd')
      },
      async() {
        this.$store.dispatch('incrementAsync')
      }
    }*/
  }
</script>

<style>

</style>
