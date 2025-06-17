<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4 text-gray-800">ติดต่อเรา</h1>
    <p class="text-lg text-gray-700">
      หากคุณมีคำถามหรือข้อสงสัยใดๆ โปรดติดต่อเราได้ตามช่องทางด้านล่าง:
    </p>
    <ul class="mt-4 text-gray-600 list-disc list-inside">
      <li>อีเมล: <a href="mailto:info@example.com" class="text-blue-600 hover:underline">info@example.com</a></li>
      <li>โทรศัพท์: (123) 456-7890</li>
      <li>ที่อยู่: 123 ถนนตัวอย่าง, เมือง Nuxt, ประเทศไทย</li>
    </ul>
    <p class="mt-4 text-gray-600">
      เรายินดีที่จะช่วยเหลือคุณ!
    </p>
  </div>
</template>

<script setup>
// คุณสามารถกำหนด meta data เฉพาะหน้านี้ได้
useHead({
  title: 'ติดต่อเรา',
  meta: [
    { name: 'description', content: 'วิธีการติดต่อเรา' }
  ]
})
</script>

<style scoped>
/* คุณสามารถเพิ่ม CSS เฉพาะหน้านี้ได้ */
</style>