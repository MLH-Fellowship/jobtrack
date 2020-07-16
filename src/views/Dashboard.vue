<template>

  <div>
  <div class ="header">
    <HeaderComponent/>
  </div>

    <h1>Dashboard</h1>
    <router-link to="/logout">Log out</router-link>
  <div class ="footer">
    <FooterComponent/>
  </div>
  </div>
</template>
<script>

import HeaderComponent from '@/components/header-footer/HeaderComponent'
import FooterComponent from '@/components/header-footer/FooterComponent'

export default {
  name: 'Dashboard',
  components: {
    HeaderComponent,
    FooterComponent
  },
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
