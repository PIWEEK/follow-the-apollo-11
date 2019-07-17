import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'a-scene',
  'a-assets',
  'a-asset-item',
  'a-entity',
  'a-gltf-model',
  'a-marker'
]
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
