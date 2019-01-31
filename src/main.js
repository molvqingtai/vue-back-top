import Vue from 'vue'
import App from './App.vue'
import BackTop from './plugin-entry'
Vue.config.productionTip = false

Vue.use(BackTop)

new Vue({
  render: h => h(App)
}).$mount('#app')
