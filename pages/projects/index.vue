<template>
  <div>
    <!-- 頁面標題 -->
    <section class="pt-24 pb-12 bg-slate-800/30">
      <div class="container">
        <h1 class="text-4xl font-bold mb-4">我的專案</h1>
        <p class="text-xl text-slate-300 max-w-3xl">
          個人作品 ( Side Projects )
        </p>
      </div>
    </section>

    <!-- 專案列表 -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :tech-stack="project.tags"
            :image="project.imageUrl"
            :demo-url="project.link"
            :code-url="project.repolink"
            :is-featured="project.hasResume"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
useSeoMeta({
  title: "我的專案 | 前端開發作品集",
  description:
    "專業前端開發者作品集，專注於 Vue.js、Nuxt.js 技術棧，展示響應式網站開發、SPA 應用程式等專案實例。",
  ogTitle: "前端開發作品集 | Vue.js & Nuxt.js 專案展示",
  ogDescription: "探索基於 Vue.js 和 Nuxt.js 的專業前端開發作品集。",
  twitterCard: "summary_large_image",
});
// 專案資料
const projects = ref([
  {
    title: "2024 Node.js實戰專題 - 屋況評估專家網",
    description: "",
    tags: ["React", "Next.js", "GraphQL"],
    imageUrl: "/img/node.png",
    link: "https://homesecuritypro-web.vercel.app/",
    repolink: "https://github.com/RayChen1996/homesecuritypro-web",
    hasResume: true,
  },
  {
    title: "旅館訂房網",
    description: "介接旅館訂房API，並使用Next.js 技術",
    tags: ["React", "Next.js", "前/後台"],
    imageUrl: "/img/hotel.png",
    link: "https://hotel-web-three.vercel.app/",
    repolink: "https://github.com/RayChen1996/hotel-web",
    hasResume: true,
  },
  {
    title: "2022 切版專題 - 習慣養成平台",
    description:
      "開始學習Next.js第一個專案，從《原子習慣》中獲得靈感，幫助使用者養成習慣",
    tags: ["React", "Next.js"],
    imageUrl: "/img/habit.png",
    link: "https://habit-piggy-next-app.vercel.app/",
    repolink: "https://github.com/RayChen1996/habit_piggy_next_app",
    hasResume: false,
  },
  {
    title: "Foodzero-Web",
    description: "",
    tags: ["Vue 3", "Nuxt"],
    imageUrl: "/img/foodzero.png",
    link: "https://foodzero-web.vercel.app/",
    repolink: "https://github.com/RayChen1996/FoodZero",
    hasResume: false,
  },
  {
    title: "Architecture-studio-Web",
    description: "",
    tags: ["Vue 3", "Nuxt"],
    imageUrl: "/img/architecture.png",
    link: "https://architecture-studio-nuxt.vercel.app/",
    repolink: "https://github.com/RayChen1996/architecture_studio_nuxt",
    hasResume: false,
  },
  {
    title: "大型寵物服務網",
    description: "",
    tags: ["React", "Next.js"],
    imageUrl: "/img/pet.png",
    link: "https://next-petpet-web.vercel.app/",
    repolink: "https://github.com/RayChen1996/next-petpet-web",
    hasResume: false,
  },
]);
</script>
