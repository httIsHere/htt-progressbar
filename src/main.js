import Vue from 'vue'
import App from './App.vue'
import progress from './lib'

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

// Vue.use(process, options)

new Vue({
  el: '#app',
  render: h => h(App)
})
