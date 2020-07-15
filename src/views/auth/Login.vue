<template>
<div></div>
</template>
<script>
export default {
  name: 'Login',
  mounted () {
    this.$nextTick(() => {
      // setAccessToken()
      // setIdToken()
      window.location.href = '/dashboard'
    })
  }
}
</script>
