<template>
  <router-link to="/demo/job/edit" class="block p-5 bg-white rounded-md shadow">
    <div class="flex justify-between">
      <p
        class="text-sm font-medium leading-snug text-gray-900"
      >{{ title }}</p>
    </div>
    <div class="mt-2 flex justify-between items-baseline">
      <div class="text-sm text-gray-600">
        <time datetime="2019-09-14">{{ date }}</time>
      </div>
      <div>
        <span
          v-if="label == 'QA'"
          class="px-2 py-1 leading-tight inline-flex items-center bg-purple-100 rounded"
        >
          <svg
            class="h-2 w-2 text-purple-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span class="ml-2 text-sm font-medium text-purple-900">{{ label }}</span>
        </span>

        <span
          v-if="label == 'Frontend'"
          class="px-2 py-1 leading-tight inline-flex items-center bg-orange-100 rounded"
        >
          <svg
            class="h-2 w-2 text-orange-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span class="ml-2 text-sm font-medium text-orange-900">{{ label }}</span>
        </span>

        <span
          v-if="label == 'Backend'"
          class="px-2 py-1 leading-tight inline-flex items-center bg-yellow-100 rounded"
        >
          <svg
            class="h-2 w-2 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span class="ml-2 text-sm font-medium text-yellow-900">{{ label }}</span>
        </span>

        <span
          v-if="label == 'Fullstack'"
          class="px-2 py-1 leading-tight inline-flex items-center bg-red-100 rounded"
        >
          <svg
            class="h-2 w-2 text-red-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span class="ml-2 text-sm font-medium text-red-900">{{ label }}</span>
        </span>

        <span
          v-if="label == 'Android'"
          class="px-2 py-1 leading-tight inline-flex items-center bg-blue-100 rounded"
        >
          <svg
            class="h-2 w-2 text-blue-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span class="ml-2 text-sm font-medium text-blue-900">{{ label }}</span>
        </span>

        <span
          v-if="label == 'IOS'"
          class="px-2 py-1 leading-tight inline-flex items-center bg-green-100 rounded"
        >
          <svg
            class="h-2 w-2 text-green-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span class="ml-2 text-sm font-medium text-green-900">{{ label }}</span>
        </span>

        <span
          v-if="label == 'Other'"
          class="px-2 py-1 leading-tight inline-flex items-center bg-indigo-100 rounded"
        >
          <svg
            class="h-2 w-2 text-indigo-500"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="3" />
          </svg>
          <span class="ml-2 text-sm font-medium text-indigo-900">{{ label }}</span>
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    title: String,
    date: String,
    label: String
  }
}
</script>
