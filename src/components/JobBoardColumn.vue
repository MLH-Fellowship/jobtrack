<template>
  <div class="flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md">
    <h3 class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-700">{{ title }}</h3>
    <div class="flex-1 min-h-0 overflow-y-auto">
      <ul class="pt-1 pb-3 px-3">
        <li class="mt-3" v-for="job in jobs" :key="job.id">
          <job-card :title="job.title" :date="job.date" :label="job.label"></job-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import JobCard from '@/components/JobCard'

export default {
  name: 'JobBoardColumn',
  props: {
    title: String,
    jobs: Array
  },
  components: {
    JobCard
  }
}
</script>
