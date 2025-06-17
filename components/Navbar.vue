<template>
  <nav class="w-full">
    <div class="flex justify-end items-center">
      <!-- Desktop Navbar -->
      <ul class="hidden md:flex justify-end items-center space-x-2 md:space-x-6">
        <li>
          <NuxtLink
            to="/"
            :class=" [
              'px-4 py-2 rounded-full font-semibold transition-all duration-200',
              $route.path === '/'
                ? 'bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 text-white shadow-lg scale-105'
                : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-yellow-200',
            ]"
          >
            หน้าหลัก
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            :class=" [
              'px-4 py-2 rounded-full font-semibold transition-all duration-200',
              $route.path === '/about'
                ? 'bg-gradient-to-r from-pink-300 via-blue-300 to-yellow-300 text-white shadow-lg scale-105'
                : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-pink-200',
            ]"
          >
            เกี่ยวกับเรา
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            :class=" [
              'px-4 py-2 rounded-full font-semibold transition-all duration-200',
              $route.path === '/contact'
                ? 'bg-gradient-to-r from-blue-300 via-yellow-300 to-pink-300 text-white shadow-lg scale-105'
                : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-blue-200',
            ]"
          >
            ติดต่อ
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Navbar -->
      <div class="md:hidden">
        <button
          @click="open = !open"
          class="p-2 rounded focus:outline-none focus:ring-2 focus:ring-white bg-white bg-opacity-10 text-white"
          aria-label="Toggle menu"
        >
          <svg v-if="!open" class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <transition name="fade">
          <ul
            v-if="open"
            class="absolute right-4 top-16 bg-gradient-to-br from-blue-700 via-purple-700 to-pink-500 rounded-xl shadow-xl p-4 flex flex-col space-y-2 min-w-[160px] z-50 animate-slide-down"
          >
            <li>
              <NuxtLink
                to="/"
                @click="open = false"
                :class=" [
                  'block px-4 py-2 rounded-full font-semibold transition-all duration-200 text-center',
                  $route.path === '/'
                    ? 'bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 text-white shadow scale-105'
                    : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-yellow-200',
                ]"
              >
                หน้าหลัก
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                @click="open = false"
                :class=" [
                  'block px-4 py-2 rounded-full font-semibold transition-all duration-200 text-center',
                  $route.path === '/about'
                    ? 'bg-gradient-to-r from-pink-300 via-blue-300 to-yellow-300 text-white shadow scale-105'
                    : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-pink-200',
                ]"
              >
                เกี่ยวกับเรา
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                @click="open = false"
                :class=" [
                  'block px-4 py-2 rounded-full font-semibold transition-all duration-200 text-center',
                  $route.path === '/contact'
                    ? 'bg-gradient-to-r from-blue-300 via-yellow-300 to-pink-300 text-white shadow scale-105'
                    : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-blue-200',
                ]"
              >
                ติดต่อ
              </NuxtLink>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
nav {
  background: transparent;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 767px) {
  .animate-slide-down {
    animation: slideDown 0.2s;
  }
  @keyframes slideDown {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>