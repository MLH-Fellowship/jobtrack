<template>
<div></div>
</template>
<script>
export default {
  name: 'Login',
  async mounted () {
    const claims = await this.$auth.getIdTokenClaims()
    this.$cookies.set('apollo-token', claims.__raw)
    this.$nextTick(() => {
      window.location.href = '/dashboard'
    })
  }
}
</script>
