<template>
  <div class="about h-screen flex">
    <div
      :class="sidebarOpen ? 'translate-x-0 ease-out transition-medium' : '-translate-x-full ease-in transition-medium'"
      class="fixed z-30 inset-y-0 left-0 w-64 px-8 py-4 bg-gray-100 border-r overflow-auto lg:static lg:inset-auto lg:translate-x-0"
    >
      <div class="-mx-3 pl-3 pr-1 flex items-center justify-between">
        <span>
          <img alt class="h-9 w-9" src="@/assets/logo.png" />
        </span>
        <button @click="sidebarOpen = false" class="text-gray-700 lg:hidden">
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
        <h3 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Issues</h3>
        <div class="mt-2 -mx-3">
          <a href="#" class="flex justify-between items-center px-3 py-2 bg-gray-200 rounded-lg">
            <span class="text-sm font-medium text-gray-900">All</span>
            <span class="text-xs font-semibold text-gray-700">36</span>
          </a>
          <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg">
            <span class="text-sm font-medium text-gray-700">Assigned to me</span>
            <span class="text-xs font-semibold text-gray-700">2</span>
          </a>
          <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg">
            <span class="text-sm font-medium text-gray-700">Created by me</span>
            <span class="text-xs font-semibold text-gray-700">1</span>
          </a>
          <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg">
            <span class="text-sm font-medium text-gray-700">Archived</span>
          </a>
        </div>
        <h3 class="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">Tags</h3>
        <div class="mt-2 -mx-3">
          <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg">
            <span class="text-sm font-medium text-gray-700">Bug</span>
          </a>
          <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg">
            <span class="text-sm font-medium text-gray-700">Feature Request</span>
          </a>
          <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg">
            <span class="text-sm font-medium text-gray-700">Marketing</span>
          </a>
          <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg">
            <span class="text-sm font-medium text-gray-700">v2.0</span>
          </a>
          <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg">
            <span class="text-sm font-medium text-gray-700">Enhancement</span>
          </a>
          <a href="#" class="flex justify-between items-center px-3 py-2 rounded-lg">
            <span class="text-sm font-medium text-gray-700">Design</span>
          </a>
        </div>
        <button class="mt-2 -ml-1 flex items-center text-sm font-medium text-gray-600">
          <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24">
            <path d="M12 7v10m5-5H7" stroke-linecap="round" stroke-width="2" stroke="currentColor" />
          </svg>
          <span class="ml-1">New Project</span>
        </button>
      </nav>
    </div>
    <div class="flex-1 min-w-0 flex flex-col bg-white">
      <div class="flex-shrink-0 sm:border-b-2 sm:border-gray-200">
        <header>
          <div class="px-4 sm:px-6">
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <div class="flex-1 min-w-0 flex">
                <button @click="sidebarOpen = true" class="text-gray-600 lg:hidden">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4 6h16M4 12h16M4 18h7"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                    />
                  </svg>
                </button>
                <div class="flex-shrink-1 ml-3 relative w-64 lg:ml-0">
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
                </div>
              </div>
              <div class="ml-6 flex-shrink-0 flex items-center">
                <button>
                  <svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                    />
                  </svg>
                </button>
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
                <h2 class="text-2xl font-semibold text-gray-900 leading-tight">All Issues</h2>
                <div class="mt-1 flex items-center sm:mt-0 sm:ml-6">
                  <span class="rounded-full border-2 border-white">
                    <img
                      alt
                      class="h-6 w-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                    />
                  </span>
                  <span class="-ml-2 rounded-full border-2 border-white">
                    <img
                      alt
                      class="h-6 w-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                    />
                  </span>
                  <span class="-ml-2 rounded-full border-2 border-white">
                    <img
                      alt
                      class="h-6 w-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                    />
                  </span>
                  <span class="-ml-2 rounded-full border-2 border-white">
                    <img
                      alt
                      class="h-6 w-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                    />
                  </span>
                </div>
              </div>
              <div class="flex">
                <span class="hidden sm:inline-flex p-1 border bg-gray-200 rounded-md">
                  <button class="px-2 py-1 rounded">
                    <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </button>
                  <button class="px-2 py-1 bg-white rounded shadow">
                    <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                        stroke-width="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </button>
                </span>
                <button
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
                  <span class="ml-1">New Issue</span>
                </button>
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
      <div class="flex-1 overflow-auto">
        <main class="p-3 h-full inline-flex overflow-hidden">
          <div class="flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md">
            <h3 class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-700">Backlog</h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="pt-1 pb-3 px-3">
                <li>
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Design shopping cart dropdown</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
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
                          <span class="ml-2 text-sm font-medium text-purple-900">Design</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                        <span
                          class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                        >
                          <svg class="h-2 w-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="ml-3 flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md">
            <h3 class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-700">In Progress</h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="pt-1 pb-3 px-3">
                <li>
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                        <span
                          class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                        >
                          <svg class="h-2 w-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="ml-3 flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md">
            <h3
              class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-700"
            >Ready for Review</h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="pt-1 pb-3 px-3">
                <li>
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Design shopping cart dropdown</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
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
                          <span class="ml-2 text-sm font-medium text-purple-900">Design</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                        <span
                          class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                        >
                          <svg class="h-2 w-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Design shopping cart dropdown</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
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
                          <span class="ml-2 text-sm font-medium text-purple-900">Design</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                        <span
                          class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                        >
                          <svg class="h-2 w-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="ml-3 flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md">
            <h3 class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-700">Done</h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
              <ul class="pt-1 pb-3 px-3">
                <li>
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Design shopping cart dropdown</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
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
                          <span class="ml-2 text-sm font-medium text-purple-900">Design</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                        <span
                          class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                        >
                          <svg class="h-2 w-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Design shopping cart dropdown</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 9</time>
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
                          <span class="ml-2 text-sm font-medium text-purple-900">Design</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Add discount code to checkout page</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>
                      </div>
                      <div>
                        <span
                          class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded"
                        >
                          <svg class="h-2 w-2 text-teal-500" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span class="ml-2 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mt-3">
                  <a href="#" class="block p-5 bg-white rounded-md shadow">
                    <div class="flex justify-between">
                      <p
                        class="text-sm font-medium leading-snug text-gray-900"
                      >Provide documentation on integrations</p>
                      <span>
                        <img
                          alt
                          class="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                        />
                      </span>
                    </div>
                    <div class="mt-2 flex justify-between items-baseline">
                      <div class="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 12</time>
                      </div>
                      <div></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data: () => {
    return {
      sidebarOpen: false
    }
  }
}
</script>
