<template>
  <div class="flex-1 overflow-auto">
    <main class="p-3 h-full inline-flex overflow-hidden" >
      <job-board-column title="Backlog" :jobs="jobsBacklog"></job-board-column>
      <job-board-column title="Applied" class="ml-3" :jobs="jobsApplied"></job-board-column>
      <job-board-column title="Interviewed" class="ml-3" :jobs="jobsInterviewed"></job-board-column>
      <job-board-column title="Offer" class="ml-3" :jobs="jobsOffered"></job-board-column>
      <job-board-column title="Hired" class="ml-3" :jobs="jobsHired"></job-board-column>
      <job-board-column title="Rejected" class="ml-3" :jobs="jobsRejected"></job-board-column>
    </main>
  </div>
</template>

<script>
import JobBoardColumn from '@/components/JobBoardColumn'

export default {
  name: 'HomeComponent',
  components: {
    JobBoardColumn
  },
  props: {
    jobs: Array
  },
  computed: {
    jobsBacklog: function () {
      return this.jobs.filter((job) => job.status === 'backlog')
    },
    jobsApplied: function () {
      return this.jobs.filter((job) => job.status === 'applied')
    },
    jobsInterviewed: function () {
      return this.jobs.filter((job) => job.status === 'interviewed')
    },
    jobsOffered: function () {
      return this.jobs.filter((job) => job.status === 'recieved-offer')
    },
    jobsHired: function () {
      return this.jobs.filter((job) => job.status === 'hired')
    },
    jobsRejected: function () {
      return this.jobs.filter((job) => job.status === 'rejected')
    }
  }
}
</script>

<style>

</style>
