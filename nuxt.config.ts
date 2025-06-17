// nuxt.config.js
// ไม่จำเป็นต้อง import tailwindcss จาก "@tailwindcss/vite" ที่นี่แล้ว
// import tailwindcss from "@tailwindcss/vite"; // <-- ลบบรรทัดนี้ออก

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // ใส่ CSS หลักของคุณที่นี่ (มักจะเป็นไฟล์ที่ import Tailwind base, components, utilities)
  css: [
    '~/assets/css/main.css',
  ],

  // ใช้ 'modules' สำหรับ Nuxt 3
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  // ไม่จำเป็นต้องตั้งค่า vite.plugins สำหรับ tailwindcss อีก
  // เพราะ @nuxtjs/tailwindcss จัดการให้แล้ว
  // vite: {
  //   plugins: [
  //     tailwindcss(), // <-- ลบส่วนนี้ออก
  //   ],
  // },

  // คุณสามารถเพิ่มการตั้งค่าเฉพาะของ Tailwind ได้ที่นี่ ถ้าต้องการ
  // tailwindcss: {
  //   configPath: 'tailwind.config.js', // ชี้ไปที่ไฟล์ config ของคุณ (ค่าเริ่มต้นคือ 'tailwind.config.js' อยู่แล้ว)
  //   exposeConfig: false, // เพื่อให้ config Tailwind ของคุณถูก expose ใน runtime (สำหรับ devtools หรือ debug)
  //   viewer: true, // เปิดใช้งาน Tailwind CSS viewer (สำหรับ dev mode)
  // },

})