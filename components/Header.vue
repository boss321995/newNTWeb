<template>
  <header class="bg-gray-800 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300">
        My Awesome Nuxt App
      </NuxtLink>
      <nav>
        <ul class="flex space-x-6">
          <li>
            <NuxtLink to="/" class="text-white hover:text-blue-300 transition-colors duration-300">
              หน้าหลัก
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-white hover:text-blue-300 transition-colors duration-300">
              เกี่ยวกับเรา
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="text-white hover:text-blue-300 transition-colors duration-300">
              ติดต่อ
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// ไม่มี logic เฉพาะสำหรับ Header ในตอนนี้
</script>

<style scoped>
/* คุณสามารถเพิ่ม style เฉพาะสำหรับ Header ที่นี่ได้ */
</style>