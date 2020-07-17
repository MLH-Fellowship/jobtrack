import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client'

// Install the vue plugin
Vue.use(VueApollo)

// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token'

// Http endpoint
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:4000/graphql'
// Files URL root
export const filesRoot = process.env.VUE_APP_FILES_ROOT || httpEndpoint.substr(0, httpEndpoint.indexOf('/graphql'))

Vue.prototype.$filesRoot = filesRoot

// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:4000/graphql',
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  // link: myLink

  // Override default cache
  // cache: myCache

  // Override the way the Authorization header is set
  getAuth: (tokenName: any) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    const token = window.$cookies.get(tokenName)
    if (token) {
      return 'Bearer ' + token
    } else {
      return 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFaT056eHpVUmhsc181NTBEc2FoOCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTA3NTc5MTAwNjgwNDIxODY0NTAwIn0sImdpdmVuX25hbWUiOiJCYWZmb3VyIiwiZmFtaWx5X25hbWUiOiJCb2FtcG9uZyIsIm5pY2tuYW1lIjoiYmFmZm91ciIsIm5hbWUiOiJCYWZmb3VyIEJvYW1wb25nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdoRTR2VGZPY2ZJeVBfOHFKbGRJYi1yeC1LYjQ1TFBEcDRqcUVOMDI0cXhsbmZ2NkJmc2NPZDFjSVdmMDNkX3ZSNV9GNHJOcm56bTdSeDN2UDk2ZUZyVEhCem5SVUQ4d0VuZ3laLVNHdHhnaGctRWRMREZ6Y3RlQWhBWTVqZF9fdGZaQjc3T2NrOWxzYi1HRzRiRHNGbUdiRkkyUFFIVTNQQ2IwSzZtaC1wb1JwNXhKLVB6RUZEXzBOUXUzeFBvaDU0MjRBcWVaUjJfbmZrWVdXVnRjNEFGb0lUWTRNYW5aZTBXRUNXcjJrZGZnckU1R3l5bTJxNk1MVFFvRi1QNFdrblozU1lDNGh1dG5ud01JUWNfbm05UVllaEVSeTI0cVFuR3h6aDR6dmMxWXVTQktvRHhyOWx2THRFZjRhYnRUQUlFaUhyZnZaMjRwNVZzV1lOZEZReTQtQ05BMnlORFNQUXRFMEVfb0hfZDl1M1BnSWw5aWV4YUpUR2VOU3BtblJnbUtxcHhZaXdSakZKX3RUTWxaSGd0R2U0ZE42c2d6Z2RMMDA5d0RwaGdCVXhieko0QmNyMXdOQ2I2TGMxeXVhWDY2YTBGNzJKdkttT1F2LVJkcWxkdF82bzlNdWd4OWZlVkVwV2lNRUQ0UWtDR3RmT3k1T1VQaWZNNnBfRGhGdG52ZHZCSGRRdWQ2ZjhfQjNmaHF1cm1namFCLUF3b3hkQ3BtTGJlN1FjQnktSUFLQnh6MGxyMkpIX2d2RnFGLWV0dzBBTWJxWlFXaTRwZ1JiaHI5SHBYZHVQWXM5dWNnZ0F4Qnk3UDV3T0h1WUYtNUhVNHByNVI5aV96ejUyUUY3VGg2c3VwMy1yU0R0SV9qZHlfcDRHUVl4bFNaZTZhNkpDX1BucHY3eUg2eFduWEY2TVdpaWdzbGZfMVZpTHhLSXhMSHpwWDF0TzhRcGZKWE56WmY4SmtoeWZvOFhOUmR2MWRTTnJOSWcwR2VHSldtWGFRVnItSzVRbnQ3VTlYNVo4MHFRIiwibG9jYWxlIjoiZW4iLCJ1cGRhdGVkX2F0IjoiMjAyMC0wNy0xN1QxNzoxNjowNi40NjlaIiwiZW1haWwiOiJiYWZmb3VyQGlub2Nhbi5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hcHBnaGFyYWdlLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNzU3OTEwMDY4MDQyMTg2NDUwMCIsImF1ZCI6IlZBbVprcmRvWWdKSEtOVUtjbFhEWjdUVlBTSG5zbmV1IiwiaWF0IjoxNTk1MDA2MTcwLCJleHAiOjE1OTUwNDIxNzAsIm5vbmNlIjoiVTFGSGNXcEtPRUZvT0ZwU1dqZHNVMUJDVVZGRFZUVnNTVXR5WkhKNmNGZE9Ua1ZoWmw4elJtWkhjZz09In0.P7-YWGaUWC2u-wxAOzvW3-_L7qR6kIvF3a7nm9_r6hfr0AYLjeI4t_qR0oDqnW2FPY_IHO1Rwq9EZKfo0Nafjq3MmshTgAkDQdeTclqCmOlUjB93nFUZ5AomQizTC1Rwex6HdjikS9rIgBouG5oyiWNg2P2JPGykt1qXoZHa-AGr79-DfxhObTMIuVvsTwEK87ov7dulchqXq3oTHFR4dJ9yeUX5tL4AKY42ee8DddUZuBHwHI9h292efz8Adc4MmI0R7aGPxvAjKHQJHcMaBcrvog5ZK-WMXzJYCKRKpvCCcYrYSt--I232ieVZ-LwNg-VyTvLto8E37naoK4CXUg'
    }
  }

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
}

// Call this in the Vue app file
export function createProvider (options = {}) {
  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options
  })
  apolloClient.wsClient = wsClient

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      }
    },
    errorHandler (error) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    }
  })

  return apolloProvider
}

// Manually call this when user log in
export async function onLogin (apolloClient: { wsClient: any; resetStore: () => any }, token: string) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message)
  }
}

// Manually call this when user log out
export async function onLogout (apolloClient: { wsClient: any; resetStore: () => any }) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
  }
}
