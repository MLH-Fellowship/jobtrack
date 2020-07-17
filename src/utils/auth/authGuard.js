import { getInstance } from './index'

export const authGuard = (to, from, next) => {
  const authService = getInstance()

  const fn = () => {
    // If the user is authenticated, continue with the route
    if (authService.isAuthenticated) {
      console.log('Authenticated: ', authService)
      return next()
    }
    // Otherwise, log in
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } })
  }

  // If loading has already finished, check our auth state using `fn()`
  if (!authService.loading) {
    return fn()
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch('loading', loading => {
    if (loading === false) {
      return fn()
    }
  })
}

export const requireAuth = (to, from, next) => {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

function isLoggedIn () {
  return !!window.$cookies.get('apollo-token')
}
