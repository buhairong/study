import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

import './base.css'

Vue.use(VueResource)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})

