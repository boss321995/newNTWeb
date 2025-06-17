// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        // กำหนดคีย์เฟรมสำหรับ gradient animation
        // นี่คือส่วนที่ทำให้ background (gradient) เลื่อนไปมา
        'text-gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' }, // ตำแหน่งเริ่มต้นและสิ้นสุดของ gradient
          '50%': { backgroundPosition: '100% 50%' },   // ตำแหน่งกลางของ gradient
        },
      },
      animation: {
        // กำหนดชื่อแอนิเมชันที่จะใช้ใน Tailwind Classes
        'text-gradient': 'text-gradient 5s ease-in-out infinite', // ใช้คีย์เฟรม 'text-gradient', ระยะเวลา 3 วินาที, รูปแบบ ease-in-out, วนลูปไม่สิ้นสุด
      },
    },
  },
  plugins: [],
}