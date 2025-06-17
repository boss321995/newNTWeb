<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-grow">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
// ไม่ต้อง import Header หรือ Footer ที่นี่ Nuxt จะ auto-import ให้
</script>

<style>
/* Global styles for body, html, etc. - ควรอยู่ใน main.css หรือ app.vue แทน */
/*
html, body, #__nuxt {
  height: 100%;
  margin: 0;
  padding: 0;
}
#__nuxt {
  display: flex;
  flex-direction: column;
}
*/
</style>