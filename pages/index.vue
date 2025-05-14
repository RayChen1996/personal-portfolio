<template>
  <div>
    <!-- Hero 區塊 -->
    <Hero />

    <!-- 關於我簡介 -->
    <section class="section bg-slate-800/50">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">關於我</h2>
          <p class="text-xl text-slate-300 mb-8 leading-relaxed">
            我是一位專注於 React 與 Next.js
            的前端開發者，擁有一年實務經驗。熱衷於打造美觀、高效的使用者介面，重視程式碼的可讀性與可維護性。在過往的專案中，專注於優化網站效能與提升使用者體驗。
          </p>
          <NuxtLink to="/about" class="btn-primary">了解更多</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 精選作品 -->
    <section class="section">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-3">精選作品</h2>
          <p class="text-slate-300 max-w-2xl mx-auto">
            以下是我近期完成的幾個代表性專案，涵蓋各種應用類型與技術堆疊。
          </p>
        </div>

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

        <div class="text-center mt-12">
          <NuxtLink to="/projects" class="btn-outline">查看所有作品</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 聯絡區塊 -->
    <section class="section bg-slate-800/50">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">讓我們一起合作</h2>
          <p class="text-xl text-slate-300 mb-8">
            無論您正在尋找技術合作夥伴、有專案開發需求，或是想進一步了解我的專業背景，都歡迎隨時與我聯繫。
          </p>
          <NuxtLink to="/contact" class="btn-primary">聯絡我</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "前端開發作品集 | Vue.js & Nuxt.js 專案展示",
  description:
    "專業前端開發者作品集，專注於 Vue.js、Nuxt.js 技術棧，展示響應式網站開發、SPA 應用程式等專案實例。",
  ogTitle: "前端開發作品集 | Vue.js & Nuxt.js 專案展示",
  ogDescription: "探索基於 Vue.js 和 Nuxt.js 的專業前端開發作品集。",
  twitterCard: "summary_large_image",
});

import { ref } from "vue";

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
]);
</script>
