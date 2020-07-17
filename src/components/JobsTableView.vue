<template>
  <div class="min-h-screen w-full mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col m-2 sm:m-0">
          <div class="py-10 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <p class="text-sm leading-5 text-gray-700" v-if="jobs.length == 0">
                No Results found
              </p>
            <div
              v-if="jobs.length != 0"
              class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
            >
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >Title</th>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >Location</th>
                    <th
                      class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >Status</th>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr v-for="job in jobs" :key="job.id">
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div class="flex items-center">
                        <div>
                          <div class="text-sm leading-5 font-medium text-gray-900">{{ job.title }}</div>
                          <div class="text-sm leading-5 text-gray-500">{{ job.label }} -  {{ job.company }}</div>
                        </div>
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >
                      <span class="text-sm leading-5 text-gray-900">
                       {{ job.location }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                      <div class="text-sm leading-5 text-gray-900">
                       <span v-if="job.status === 'hired'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Hired
                        </span>
                        <span v-if="job.status === 'applied'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Applied
                        </span>
                        <span v-if="job.status === 'backlog'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          Backlog
                        </span>
                        <span v-if="job.status === 'rejected'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Rejected
                        </span>
                        <span v-if="job.status === 'recieved-offer'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Offer
                        </span>
                        <span v-if="job.status === 'interviewed'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                          Interviewed
                        </span>
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                    >
                      <router-link to="/demo/job/edit">
                        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </router-link>
                    </td>
                  </tr>

                </tbody>
              </table>
              <!-- <div
                class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
              >
                <div class="hidden sm:block">
                  <p class="text-sm leading-5 text-gray-700">
                    Showing
                    <span class="font-medium">1</span>
                    to
                    <span class="font-medium">10</span>
                    of
                    <span class="font-medium">20</span>
                    results
                  </p>
                </div>
                <div class="flex-1 flex justify-between sm:justify-end">
                  <a
                    href="#"
                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >Previous</a>
                  <a
                    href="#"
                    class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >Next</a>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'JobsTableView',
  props: {
    jobs: Array
  }
}
</script>
