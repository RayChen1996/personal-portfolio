<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0 }"
    class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative"
  >
    <!-- Featured 標記 -->
    <div
      v-if="isFeatured"
      class="absolute top-3 right-3 bg-primary px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg z-10"
    >
      🔥 精選
    </div>

    <!-- 項目圖片 (可選) -->
    <div v-if="image" class="h-48 w-full overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
      />
    </div>

    <!-- 內容區 -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
      <p class="text-slate-300 mb-4">{{ description }}</p>

      <!-- 技術列表 -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="bg-slate-700 px-2 py-1 rounded text-xs font-medium text-slate-300"
        >
          {{ tech }}
        </span>
      </div>

      <!-- 項目連結 -->
      <div class="flex gap-3">
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          class="inline-flex items-center text-primary hover:text-sky-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          預覽
        </a>
        <a
          v-if="codeUrl"
          :href="codeUrl"
          target="_blank"
          class="inline-flex items-center text-primary hover:text-sky-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          程式碼
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techStack: {
    type: Array,
    default: () => [],
  },
  image: {
    type: String,
    default: "",
  },
  demoUrl: {
    type: String,
    default: "",
  },
  codeUrl: {
    type: String,
    default: "",
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});
</script>
