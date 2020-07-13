import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/tailwind.css'
import './assets/fonts/Inter/inter.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
