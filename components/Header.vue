<template>
  <header class="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500 text-white shadow-lg py-4 w-full">
    <div class="container mx-auto flex justify-between items-center px-4">
      <NuxtLink to="/" class="flex items-center text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 hover:scale-105 transition-transform duration-300 whitespace-nowrap">
        <span>My Awesome Nuxt App</span>
        <!-- ใส่ Icon ตรงนี้ -->
      </NuxtLink>
      <Navbar />
    </div>
  </header>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>

<style scoped>
header {
  border-radius: 0 0 1.5rem 1.5rem;
}

a.text-2xl:hover {
  filter: brightness(1.2);
}
</style>