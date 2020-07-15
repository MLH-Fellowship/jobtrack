import Vue from 'vue'
import decode from 'jwt-decode'
import Router from 'vue-router'
import createAuth0Client from '@auth0/auth0-spa-js'

const ID_TOKEN_KEY = 'id_token'
const ACCESS_TOKEN_KEY = 'access_token'
const REDIRECT_URL = `${window.location.origin}/login`

const router = new Router({
  mode: 'history'
})

/** Define a default action to perform after authentication */
const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname)

let instance

/** Returns the current instance of the SDK */
export const getInstance = () => instance

/** Creates an instance of the Auth0 SDK. If one has already been created, it returns that instance */
export const useAuth0 = ({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = REDIRECT_URL,
  ...options
}) => {
  if (instance) return instance

  // The 'instance' is simply a Vue object
  instance = new Vue({
    data () {
      return {
        loading: true,
        isAuthenticated: false,
        user: {},
        auth0Client: null,
        popupOpen: false,
        error: null
      }
    },
    methods: {
      /** Authenticates the user using a popup window */
      async loginWithPopup (o) {
        this.popupOpen = true

        try {
          await this.auth0Client.loginWithPopup(o)
        } catch (e) {
          // eslint-disable-next-line
          console.error(e);
        } finally {
          this.popupOpen = false
        }

        this.user = await this.auth0Client.getUser()
        this.isAuthenticated = true
      },
      /** Handles the callback when logging in using a redirect */
      async handleRedirectCallback () {
        this.loading = true
        try {
          await this.auth0Client.handleRedirectCallback()
          this.user = await this.auth0Client.getUser()
          this.isAuthenticated = true
        } catch (e) {
          this.error = e
        } finally {
          this.loading = false
        }
      },
      /** Authenticates the user using the redirect method */
      loginWithRedirect (o) {
        return this.auth0Client.loginWithRedirect(o)
      },
      /** Returns all the claims present in the ID token */
      getIdTokenClaims (o) {
        return this.auth0Client.getIdTokenClaims(o)
      },
      /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
      getTokenSilently (o) {
        return this.auth0Client.getTokenSilently(o)
      },
      /** Gets the access token using a popup window */
      getTokenWithPopup (o) {
        return this.auth0Client.getTokenWithPopup(o)
      },
      /** Logs the user out and removes their session on the authorization server */
      logout (o) {
        return this.auth0Client.logout(o)
      }
    },
    /** Use this lifecycle method to instantiate the SDK client */
    async created () {
      // Create a new instance of the SDK client using members of the given options object
      this.auth0Client = await createAuth0Client({
        domain: options.domain,
        client_id: options.clientId,
        audience: options.audience,
        redirect_uri: redirectUri
      })

      try {
        // If the user is returning to the app after authentication..
        if (
          window.location.search.includes('code=') &&
          window.location.search.includes('state=')
        ) {
          // handle the redirect and retrieve tokens
          const { appState } = await this.auth0Client.handleRedirectCallback()

          // Notify subscribers that the redirect callback has happened, passing the appState
          // (useful for retrieving any pre-authentication state)
          onRedirectCallback(appState)
        }
      } catch (e) {
        this.error = e
      } finally {
        // Initialize our internal authentication state
        this.isAuthenticated = await this.auth0Client.isAuthenticated()
        this.user = await this.auth0Client.getUser()
        this.loading = false
      }
    }
  })

  return instance
}

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const Auth0Plugin = {
  install (Vue, options) {
    Vue.prototype.$auth = useAuth0(options)
  }
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName (name) {
  const match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

// Get and store access_token in local storage
export function setAccessToken () {
  const accessToken = getParameterByName('access_token')
  console.log({ accessToken })
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
}

// Get and store id_token in local storage
export function setIdToken () {
  const idToken = getParameterByName('id_token')
  console.log({ idToken })
  localStorage.setItem(ID_TOKEN_KEY, idToken)
}

export function getIdToken () {
  return localStorage.getItem(ID_TOKEN_KEY)
}

export function getAccessToken () {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

function clearIdToken () {
  localStorage.removeItem(ID_TOKEN_KEY)
}

function clearAccessToken () {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export function isLoggedIn () {
  const idToken = getIdToken()
  return !!idToken && !isTokenExpired(idToken)
}

function getTokenExpirationDate (encodedToken) {
  const token = decode(encodedToken)
  if (!token.exp) { return null }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

function isTokenExpired (token) {
  const expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}

export function requireAuth (to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export function logout () {
  clearIdToken()
  clearAccessToken()
  router.go('/')
}

export function login () {
  setAccessToken()
  setIdToken()
  router.go('/dashboard')
}
