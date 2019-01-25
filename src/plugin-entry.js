import BackTop from './components/Back-Top.vue'

const BackTopPlugin = {
  install (Vue) {
    Vue.component(BackTop.name, BackTop)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BackTopPlugin)
}

export default BackTopPlugin
