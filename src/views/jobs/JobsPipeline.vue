<template>
  <dashboard-layout>
      <jobs-board-view
        v-if="currentView === 'board'"
        :jobs="jobs"
      ></jobs-board-view>
      <jobs-table-view
        v-if="currentView === 'table'"
        :jobs="jobs"
      ></jobs-table-view>
    </dashboard-layout>
</template>
<script>
import DashboardLayout from '@/views/layout/DashboardLayout'
import JobsTableView from '@/components/JobsTableView'
import JobsBoardView from '@/components/JobsBoardView'

export default {
  name: 'JobsPipeline',
  components: {
    DashboardLayout,
    JobsTableView,
    JobsBoardView
  },
  data: () => {
    return {
      jobs: [
        {
          id: 1,
          title: 'Full-stack Developer (ruby-on-rails)',
          link: 'https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property',
          label: 'Full Stack',
          company: 'Facebook Inc.',
          location: 'London Campus',
          status: 'backlog',
          date: 'Sep. 9'
        },
        {
          id: 2,
          title: 'Software Engineer, Android',
          link: 'https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property',
          label: 'Android',
          status: 'applied',
          company: 'Snapchat Inc.',
          location: 'San Francisco Campus',
          date: 'Sep. 12'
        },
        {
          id: 3,
          title: 'Frontend Developer',
          link: 'https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property',
          label: 'Frontend',
          company: 'Microsoft Inc.',
          location: 'New York Campus',
          status: 'interviewed',
          date: 'Aug. 20'
        },
        {
          id: 4,
          title: 'Software QA Expert',
          link: 'https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property',
          label: 'QA',
          company: 'Google Inc.',
          location: 'New York Campus',
          status: 'backlog',
          date: 'Dec. 23'
        },
        {
          id: 5,
          title: 'React Developer',
          link: 'https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property',
          label: 'Frontend',
          company: 'Shopify Inc.',
          location: 'Remote - Global',
          status: 'recieved-offer',
          date: 'Jan. 2'
        },
        {
          id: 6,
          title: 'Backend Software Engineer',
          link: 'https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property',
          label: 'Backend',
          company: 'Slack Inc.',
          location: 'Remote - US',
          status: 'recieved-offer',
          date: 'June 3'
        },
        {
          id: 7,
          title: 'Software Engineer, IOS',
          link: 'https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property',
          label: 'IOS',
          company: 'Github Inc.',
          location: 'Remote - US',
          status: 'hired',
          date: 'June 14'
        },
        {
          id: 8,
          title: 'Data Science Engineer',
          link: 'https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property',
          label: 'Other',
          company: 'MLH Inc.',
          location: 'New York',
          status: 'applied',
          date: 'May 6'
        }
      ]
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
