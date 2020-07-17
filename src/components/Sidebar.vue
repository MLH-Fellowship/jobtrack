<template>
  <div
      :class="true ? 'translate-x-0 ease-out transition-medium' : '-translate-x-full ease-in transition-medium'"
      class="fixed z-30 inset-y-0 left-0 w-64 px-8 py-4 bg-gray-100 border-r overflow-auto lg:static lg:inset-auto lg:translate-x-0"
    >
      <div class="-mx-3 pl-3 pr-1 flex items-center justify-between">
        <span>
          <img alt class="h-9 w-9" src="@/assets/logo.png" />
        </span>
        <button @click="closeSidebar()" class="text-gray-700 lg:hidden">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
      <nav class="mt-8">
        <h3 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Jobs</h3>
        <div class="mt-2 -mx-3">
          <router-link
            :to="{ name: 'demo-filtered-jobs-board', query: { filter: 'all', view: 'table'}}"
            :class="[filterView === 'all' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-900">All</span>
            <span v-if="stats.all != 0" class="text-xs font-semibold text-gray-700">{{ stats.all }}</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-filtered-jobs-board', query: { filter: 'applied', view: 'table' }}"
            :class="[filterView === 'applied' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Applied</span>
            <span v-if="stats.applied != 0" class="text-xs font-semibold text-gray-700">{{ stats.applied }}</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-filtered-jobs-board', query: { filter: 'interviewed', view: 'table' }}"
            :class="[filterView === 'interviewed' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Interviewed</span>
            <span v-if="stats.interviewed != 0" class="text-xs font-semibold text-gray-700">{{ stats.interviewed }}</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-filtered-jobs-board', query: { filter: 'recieved-offer', view: 'table' }}"
            :class="[filterView === 'recieved-offer' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Offers</span>
            <span v-if="stats.offers != 0" class="text-xs font-semibold text-gray-700">{{ stats.offers }}</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-filtered-jobs-board', query: { filter: 'hired', view: 'table' }}"
            :class="[filterView === 'hired' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Hired</span>
            <span v-if="stats.hired != 0" class="text-xs font-semibold text-gray-700">{{ stats.hired }}</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-filtered-jobs-board', query: { filter: 'rejected', view: 'table' }}"
            :class="[filterView === 'rejected' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Rejected</span>
            <span v-if="stats.rejected != 0" class="text-xs font-semibold text-gray-700">{{ stats.rejected }}</span>
          </router-link>
        </div>
        <h3 class="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">Tags</h3>
        <div class="mt-2 -mx-3">
          <router-link
            :to="{ name: 'demo-tag-jobs-board', query: { tag: 'frontend' }}"
            :class="[tagView === 'frontend' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Frontend</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-tag-jobs-board', query: { tag: 'backend' }}"
            :class="[tagView === 'backend' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Backend</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-tag-jobs-board', query: { tag: 'fullstack' }}"
            :class="[tagView === 'fullstack' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Full Stack</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-tag-jobs-board', query: { tag: 'qa' }}"
            :class="[tagView === 'qa' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">QA</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-tag-jobs-board', query: { tag: 'android' }}"
            :class="[tagView === 'android' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Android</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-tag-jobs-board', query: { tag: 'ios' }}"
            :class="[tagView === 'ios' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">IOS</span>
          </router-link>
          <router-link
            :to="{ name: 'demo-tag-jobs-board', query: { tag: 'other' }}"
            :class="[tagView === 'other' ? 'bg-gray-200 rounded-lg' : '']"
            class="flex justify-between items-center px-3 py-2"
          >
            <span class="text-sm font-medium text-gray-700">Other</span>
          </router-link>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => {
    return {
      stats: {}
    }
  },
  methods: {
    closeSidebar () {
      this.$emit('close-sidebar')
    }
  },
  mounted () {
    this.stats = {
      all: 8,
      applied: 2,
      interviewed: 1,
      offers: 2,
      hired: 1,
      rejected: 0
    }
  },
  computed: {
    filterView () {
      if (!this.$route.query.filter && !this.$route.query.tag) {
        return 'all'
      }
      return this.$route.query.filter
    },
    tagView () {
      return this.$route.query.tag
    }
  }
}
</script>
