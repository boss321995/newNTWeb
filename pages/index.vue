<template>
  <main class="p-8 text-center">
    <h1 class="
        text-6xl
        md:text-8xl
        font-extrabold
        text-transparent
        bg-clip-text
        bg-gradient-to-r
        from-blue-500        /* สีเริ่มต้น: ฟ้า */
        via-pink-500         /* สีกลาง: ชมพู */
        to-yellow-500        /* สีสุดท้าย: เหลือง */
        bg-[length:200%_auto] /* ขนาดพื้นหลังที่ใหญ่พอให้สีวิ่ง */
        animate-text-gradient /* แอนิเมชันที่ทำให้สีขยับ */
        inline-block
        whitespace-nowrap
        leading-tight
      ">
      ข้อความวิ่งไล่เฉดสีที่สวยงาม!
    </h1>
   
  </main>
</template>

<script setup>
// ใน Nuxt 3 สามารถใช้ script setup ได้เลย
// หรือถ้าเป็น Nuxt 2 ก็ใช้ export default {} ตามปกติ
</script>

<style scoped>
/* สำคัญมาก: กำหนดขนาด background ให้ใหญ่กว่า 100% เพื่อให้มีพื้นที่สำหรับ gradient ในการเลื่อน */
h1 {
  background-size: 200% auto; /* 200% หมายถึง background กว้างเป็นสองเท่าของ element */
}
</style>