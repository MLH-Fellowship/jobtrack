<template>
  <div>
    <h1>Dashboard</h1>
    <router-link to="/logout">Log out</router-link>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data: () => {
    return {
      // sidebarOpen: false
    }
  },
  methods: {
    // Log the user in
    logout () {
      this.$auth.logout({
        returnTo: `${window.location.origin}/logout`
      })
    }
  }
}
</script>
