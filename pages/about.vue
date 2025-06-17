<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4 text-gray-800">เกี่ยวกับเรา</h1>
    <p class="text-lg text-gray-700">
      นี่คือหน้าเกี่ยวกับเราของคุณ คุณสามารถเพิ่มข้อมูลเกี่ยวกับบริษัท, ทีมงาน, หรือภารกิจได้ที่นี่
    </p>
    <p class="mt-4 text-gray-600">
      เรามุ่งมั่นที่จะนำเสนอสิ่งที่ดีที่สุดให้กับคุณ!
    </p>
  </div>
</template>

<script setup>
// คุณสามารถกำหนด meta data เฉพาะหน้านี้ได้
useHead({
  title: 'เกี่ยวกับเรา',
  meta: [
    { name: 'description', content: 'เรียนรู้เพิ่มเติมเกี่ยวกับเรา' }
  ]
})
</script>

<style scoped>
/* คุณสามารถเพิ่ม CSS เฉพาะหน้านี้ได้ */
</style>