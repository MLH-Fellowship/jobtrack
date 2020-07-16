<template>
  <div class="relative bg-white overflow-hidden">
    <div class="mx-auto px-10">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="sticky">
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#" aria-label="Home">
                    <img class="h-8 w-auto sm:h-10" src="../assets/logo.png" alt="Logo" />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      @click="showNav()"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                    >
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4">
                <a
                  href="#"
                  class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >Product</a>
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >Features</a>
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >Marketplace</a>
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >Company</a>
                <button
                  v-if="!$auth.isAuthenticated && !$auth.loading"
                  @click="login()"
                  class="ml-8 font-medium text-teal-600 hover:text-teal-900 transition duration-150 ease-in-out"
                >Log in →</button>
                <router-link
                  v-if="$auth.isAuthenticated && !$auth.loading"
                  to="/dashboard"
                  class="block w-full px-5 py-3 text-center font-medium text-teal-600 bg-gray-50 hover:bg-gray-100 hover:text-teal-700 focus:outline-none focus:bg-gray-100 focus:text-teal-700 transition duration-150 ease-in-out"
                >Dashboard →</router-link>
              </div>
            </nav>
          </div>
        </div>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
        -->
        <div
          v-if="showMobileNav"
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div class="rounded-lg shadow-md">
            <div
              class="rounded-lg bg-white shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                    alt
                  />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    @click="showNav()"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Close menu"
                  >
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >Product</a>
                <a
                  href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >Features</a>
                <a
                  href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >Marketplace</a>
                <a
                  href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >Company</a>
              </div>
              <div>
                <button
                  v-if="!$auth.isAuthenticated && !$auth.loading"
                  @click="login()"
                  class="block w-full px-5 py-3 text-center font-medium text-teal-600 bg-gray-50 hover:bg-gray-100 hover:text-teal-700 focus:outline-none focus:bg-gray-100 focus:text-teal-700 transition duration-150 ease-in-out"
                  role="menuitem"
                >Log in →</button>
                <router-link
                  v-if="$auth.isAuthenticated && !$auth.loading"
                  to="/dashboard"
                  class="block w-full px-5 py-3 text-center font-medium text-teal-600 bg-gray-50 hover:bg-gray-100 hover:text-teal-700 focus:outline-none focus:bg-gray-100 focus:text-teal-700 transition duration-150 ease-in-out"
                >Dashboard →</router-link>
              </div>
            </div>
          </div>
        </div>

        <main
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h3
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
              Track your
              <br class="xl:hidden" />
              <span class="text-teal-600">Job Applications</span>
            </h3>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >Smooth Workflow to Ease your Pain</p>
            <ol>
              <li>Put your application on a pipeline</li>
              <li>Applied -> Accepted -> Interview -> Offer</li>
            </ol>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <button
                  v-if="!$auth.isAuthenticated && !$auth.loading"
                  @click="login()"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >Get started</button>
                <router-link
                  v-if="$auth.isAuthenticated && !$auth.loading"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-700 bg-teal-100 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  to="/dashboard"
                >Continue to Dashboard</router-link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <router-link
                  v-if="!$auth.isAuthenticated && !$auth.loading"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-700 bg-teal-100 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  to="/demo"
                >Live demo</router-link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt
      />
    </div>
    <div class="product">
      <ProductComponent />
    </div>
    <div class="features">
      <FeaturesComponent />
    </div>
    <div class="marketplace">
      <MarketplaceComponent />
    </div>
    <div class="company">
      <CompanyComponent />
    </div>
  </div>
</template>

<script>
import ProductComponent from '@/components/homePageHeaderComponents/Product.vue'
import FeaturesComponent from '@/components/homePageHeaderComponents/Features.vue'
import MarketplaceComponent from '@/components/homePageHeaderComponents/Marketplace.vue'
import CompanyComponent from '@/components/homePageHeaderComponents/Company.vue'

export default {
  name: 'Home',
  components: {
    ProductComponent,
    FeaturesComponent,
    MarketplaceComponent,
    CompanyComponent
  },
  data: function () {
    return {
      showMobileNav: false
    }
  },
  methods: {
    showNav () {
      this.showMobileNav = !this.showMobileNav
    },
    // Log the user in
    login () {
      this.$auth.loginWithRedirect()
    }
  }
}
</script>

<style>
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
