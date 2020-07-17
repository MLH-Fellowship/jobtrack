import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/tailwind.css'
import './assets/fonts/Inter/inter.css'

// Import the Auth0 configuration
import { domain, clientId } from '../auth_config.json'

// Import the plugin here
import { Auth0Plugin } from './utils/auth/index'

import { createProvider } from './vue-apollo'

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
