<template>
<div></div>
</template>
<script>
export default {
  name: 'Logout',
  mounted () {
    this.$cookies.remove('apollo-token')
    this.$cookies.remove('auth0.is.authenticated')
    this.$router.push({ path: '/' })
  }
}
</script>
