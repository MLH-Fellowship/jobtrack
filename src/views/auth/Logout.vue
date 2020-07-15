<template>
<div></div>
</template>
<script>
export default {
  name: 'Logout',
  mounted () {
    this.$router.push({ path: '/' })
  }
}
</script>
