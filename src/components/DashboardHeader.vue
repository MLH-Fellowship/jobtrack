<template>
  <div class="flex-shrink-0 sm:border-b-2 sm:border-gray-200">
    <header>
      <div class="px-4 sm:px-6">
        <div class="flex justify-between items-center py-3 border-b border-gray-200">
          <div class="flex-1 min-w-0 flex">
            <button @click="openSidebar()" class="text-gray-600 lg:hidden">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h7"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="currentColor"
                />
              </svg>
            </button>
            <!-- <div class="flex-shrink-1 ml-3 relative w-64 lg:ml-0">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                  />
                </svg>
              </span>
              <input
                class="block w-full rounded-md border border-gray-400 pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-600"
                placeholder="Search"
              />
            </div> -->
          </div>
          <div class="ml-6 flex-shrink-0 flex items-center">
            <button class="ml-6">
              <img
                alt="Your profile image"
                class="h-9 w-9 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
              />
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between py-2">
          <div class="sm:flex sm:items-center">
            <h2 class="text-2xl font-semibold text-gray-900 leading-tight">Job Pipeline</h2>
          </div>
          <div class="flex">
            <span class="hidden sm:inline-flex p-1 border bg-gray-200 rounded-md">
              <router-link :to="{ name: 'demo-jobs-board', query: { view: 'table' }}" class="px-2 py-1 rounded" :class="[currentView === 'table' ? 'bg-white shadow' : '']">
                <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                  />
                </svg>
              </router-link>
              <router-link :to="{ name: 'demo-jobs-board', query: { view: 'board' }}" class="px-2 py-1 rounded" :class="[currentView === 'board' ? 'bg-white shadow' : '']">
                <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    stroke-width="2"
                    stroke="currentColor"
                  />
                </svg>
              </router-link>
            </span>
            <router-link
              to="/demo/job/create"
              class="ml-5 flex items-center pl-2 pr-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 7v10m5-5H7"
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="currentColor"
                />
              </svg>
              <span class="ml-1">New Job</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex px-4 p-1 border-t border-b bg-gray-200 sm:hidden">
        <button class="inline-flex items-center justify-center w-1/2 px-2 py-1 rounded">
          <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
          <span class="ml-2 text-sm font-medium text-gray-600 leading-none">List</span>
        </button>
        <button
          class="inline-flex items-center justify-center w-1/2 px-2 py-1 bg-white rounded shadow"
        >
          <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24">
            <path
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
          <span class="ml-2 text-sm font-medium text-gray-900 leading-none">Board</span>
        </button>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: 'DashboardHeader.vue',
  methods: {
    openSidebar () {
      this.$emit('open-sidebar')
    }
  },
  computed: {
    currentView () {
      if (!this.$route.query.view) {
        return 'board'
      }
      return this.$route.query.view
    }
  }
}
</script>
