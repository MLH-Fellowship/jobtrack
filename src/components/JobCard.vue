<template>
  <a href="#" class="block p-5 bg-white rounded-md shadow">
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
      </div>
    </div>
  </a>
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
