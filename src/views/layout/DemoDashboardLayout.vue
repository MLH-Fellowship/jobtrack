<template>
   <div class="about h-screen flex">
    <sidebar v-if="sidebarOpened" @close-sidebar="sidebarOpened = false"></sidebar>
    <div class="flex-1 min-w-0 flex flex-col bg-white">
      <dashboard-header @open-sidebar="sidebarOpened = true"></dashboard-header>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import DashboardHeader from '@/components/DashboardHeader'

export default {
  name: 'DemoDashboardLayout',
  components: {
    Sidebar,
    DashboardHeader
  },
  data: () => {
    return {
      sidebarOpened: true
    }
  },
  methods: {
    // openSidebar () {
    //   console.log('Open Sidebar')
    //   this.sidebarOpened = !this.sidebarOpened
    // }
  }
}
</script>
