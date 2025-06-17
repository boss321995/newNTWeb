<template>
  <footer class="bg-gray-800 text-white p-6 mt-auto shadow-inner">
    <div class="container mx-auto text-center text-sm">
     
      <p class="mt-2">
        NT HRD TEAM 😎
       
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* คุณสามารถเพิ่ม style เฉพาะสำหรับ Footer ที่นี่ได้ */
</style>