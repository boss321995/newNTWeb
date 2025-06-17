<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// คุณสามารถใส่ global meta data สำหรับทั้งแอปที่นี่
// หรือจัดการ titleTemplate เหมือนเดิม
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My Nuxt App` : 'My Nuxt App';
  },
  meta: [
    { name: 'description', content: 'A fantastic Nuxt.js application with Tailwind CSS.' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
});
</script>

<style>
/* Global styles for body, html, etc. */
/* ควรย้าย CSS ที่จำเป็นต่อโครงสร้างหลักมาไว้ที่นี่ หรือใน main.css */
html, body, #__nuxt {
  height: 100%;
  margin: 0;
  padding: 0;
}
#__nuxt {
  display: flex;
  flex-direction: column;
}
</style>