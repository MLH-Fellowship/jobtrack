<template>
  <demo-dashboard-layout>
    <div class="max-h-screen w-full mx-auto sm:px-6 lg:px-24 xl:px-64">
      <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Edit Job
            </h3>
            <div class="mt-2">
              <p class="text-sm leading-5 text-gray-500">
                Fill in the information below about the new job
              </p>
            </div>
            <div class="pt-5 pb-4">
              <div class="mt-2 flex-shrink w-full inline-block relative">
                <label class="block mb-2 leading-none text-gray-800 font-medium text-sm"
                >Title</label>
                <input
                  type="text"
                  name="title"
                  class="form-input border-gray-300 shadow-sm block w-full pl-7 pr-12 py-3 sm:text-sm sm:leading-5"
                  required
                />
              </div>
              <div class="mt-6 flex-shrink w-full inline-block relative">
                <label class="block mb-2 leading-none text-gray-800 font-medium text-sm"
                >Description</label>
                <textarea name="description" class="form-input border-gray-300 shadow-sm block w-full pl-7 pr-12 py-3 sm:text-sm sm:leading-5" cols="30" rows="2" required></textarea>
              </div>
              <div class="mt-6 flex-shrink w-full inline-block relative">
                <label class="block mb-2 leading-none text-gray-800 font-medium text-sm"
                >Location</label>
                <input
                  type="text"
                  name="title"
                  class="form-input border-gray-300 shadow-sm block w-full pl-7 pr-12 py-3 sm:text-sm sm:leading-5"
                  required
                />
              </div>
              <div class="mt-6 flex-shrink w-full inline-block relative">
                <label class="block mb-2 leading-none text-gray-800 font-medium text-sm"
                >Company</label>
                <input
                  type="text"
                  name="title"
                  class="form-input border-gray-300 shadow-sm block w-full pl-7 pr-12 py-3 sm:text-sm sm:leading-5"
                  required
                />
              </div>
              <div class="mt-6 flex-shrink w-full inline-block relative">
                <label class="block mb-2 leading-none text-gray-800 font-medium text-sm"
                >Url</label>
                <input
                  type="text"
                  name="title"
                  class="form-input border-gray-300 shadow-sm block w-full pl-7 pr-12 py-3 sm:text-sm sm:leading-5"
                  required
                />
              </div>
              <div class="mt-6 flex-shrink w-full inline-block relative">
                <label
                  class="block mb-2 leading-none text-gray-800 font-medium"
                >Tag</label>
                <select
                  aria-label="Type"
                  name="tag"
                  class="form-select shadow-sm block appearance-none text-gray-600 w-full bg-white border border-gray-300 px-4 pr-12 py-3 rounded"
                  required
                >
                  <option disabled selected>Please select a tag</option>
                  <option
                    v-for="tag in tags"
                    v-bind:key="tag.key"
                    :value="tag.value"
                  >{{tag.label}}</option>
                </select>
              </div>
              <div class="mt-6 flex-shrink w-full inline-block relative">
                <label
                  class="block mb-2 leading-none text-gray-800 font-medium"
                >Status</label>
                <select
                  aria-label="Type"
                  name="status"
                  class="form-select shadow-sm block appearance-none text-gray-600 w-full bg-white border border-gray-300 px-4 pr-12 py-3 rounded"
                  required
                >
                  <option disabled selected>Please select current status</option>
                  <option
                    v-for="status in jobStatus"
                    v-bind:key="status.key"
                    :value="status.value"
                  >{{status.label}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-teal-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            Update Job
          </button>
        </span>
      </div>
    </div>
  </demo-dashboard-layout>
</template>
<script>
import DemoDashboardLayout from '@/views/layout/DashboardLayout'

export default {
  name: 'DemoJobsPipeline',
  components: {
    DemoDashboardLayout
  },
  data: () => {
    return {
      jobStatus: [
        {
          key: 1,
          value: 'backlog',
          label: 'Backlog'
        },
        {
          key: 2,
          value: 'applied',
          label: 'Applied'
        },
        {
          key: 3,
          value: 'interviewed',
          label: 'Interviewed'
        },
        {
          key: 4,
          value: 'recieved-offer',
          label: 'Offer'
        },
        {
          key: 5,
          value: 'hired',
          label: 'Hired'
        },
        {
          key: 5,
          value: 'rejected',
          label: 'Rejected'
        }
      ],
      tags: [
        {
          key: 1,
          value: 'frontend',
          label: 'Frontend'
        },
        {
          key: 2,
          value: 'Backend',
          label: 'Backend'
        },
        {
          key: 3,
          value: 'QA',
          label: 'QA'
        },
        {
          key: 4,
          value: 'Android',
          label: 'Android'
        },
        {
          key: 5,
          value: 'IOS',
          label: 'IOS'
        },
        {
          key: 6,
          value: 'Fullstack',
          label: 'Full Stack'
        },
        {
          key: 6,
          value: 'Other',
          label: 'Other'
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
