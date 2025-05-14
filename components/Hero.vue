<template>
  <section class="relative min-h-[80vh] flex items-center">
    <div class="container">
      <div class="max-w-3xl">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 200, duration: 700 },
          }"
          class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
        >
          Hi，我是 <span class="text-primary">Ray</span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 400, duration: 700 },
          }"
          class="text-xl md:text-2xl mb-8 text-slate-300"
        >
          一位專注於
          <span class="text-primary font-medium typewriter">React/Next</span>
          前端技術的工程師
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 600, duration: 700 },
          }"
          class="flex flex-wrap gap-4"
        >
          <a href="/resume.pdf" download class="btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            下載履歷
          </a>
          <NuxtLink to="/contact" class="btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            聯絡我
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 背景裝飾 (optional) -->
    <div
      class="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"
    ></div>
  </section>
</template>

<script setup>
// 在這裡可以添加 Hero 組件特定的邏輯
</script>

<style scoped>
.typewriter {
  overflow: hidden;
  border-right: 0.15em solid;
  white-space: nowrap;
  animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #0ea5e9;
  }
}
</style>
