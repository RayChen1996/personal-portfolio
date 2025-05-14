<template>
  <div>
    <!-- 頁面標題 -->
    <section class="pt-24 pb-12 bg-slate-800/30">
      <div class="container">
        <h1 class="text-4xl font-bold mb-4">關於我</h1>
        <p class="text-xl text-slate-300 max-w-3xl">
          了解我的專業技能、工作經驗與開發理念
        </p>
      </div>
    </section>

    <!-- 個人介紹 -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/profile.png"
                alt="Ray的照片"
                class="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold mb-6">嗨，我是 Ray</h2>
            <div class="space-y-4 text-slate-300">
              <p>
                我是一名專注於 React.js 和 Next.js 的前端開發者，擁有 1
                年的實務經驗。透過打造互動性強且具有良好使用者體驗的網頁應用，我致力於實現客戶與使用者的需求。
              </p>

              <p>
                我擅長將設計稿轉換為實際功能的前端應用，並確保其在各種裝置上都能提供一致的體驗。我喜歡不斷學習新的技術和最佳實踐，以提升自己的技能和專業水平。
              </p>

              <p>
                在職業生涯中，我參與過各種規模的專案，從小型的企業形象網站到大型的電子商務平台，積累了豐富的實戰經驗。我重視程式碼的品質和可維護性，並享受解決複雜問題的過程。
              </p>
            </div>

            <div class="mt-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能區塊 -->
    <section class="section bg-slate-800/30">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">我的技能</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 前端開發 -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="bg-slate-800 p-6 rounded-lg shadow-lg"
          >
            <div class="flex items-center mb-4">
              <div class="rounded-full bg-primary/20 p-3 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold">前端開發</h3>
            </div>
            <ul class="space-y-2 text-slate-300">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                React.js / Next.js
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                JavaScript / TypeScript
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                HTML5 / CSS3 / SCSS
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Tailwind CSS
              </li>
            </ul>
          </div>

          <!-- 工具與方法 -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
            class="bg-slate-800 p-6 rounded-lg shadow-lg"
          >
            <div class="flex items-center mb-4">
              <div class="rounded-full bg-primary/20 p-3 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold">工具與方法</h3>
            </div>
            <ul class="space-y-2 text-slate-300">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Git / GitHub
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                gulp / Vite
              </li>
              <!-- <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Jest / Vitest
              </li> -->
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Figma / Adobe XD
              </li>
            </ul>
          </div>

          <!-- 後端與資料庫 -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
            class="bg-slate-800 p-6 rounded-lg shadow-lg"
          >
            <div class="flex items-center mb-4">
              <div class="rounded-full bg-primary/20 p-3 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold">後端與資料庫</h3>
            </div>
            <ul class="space-y-2 text-slate-300">
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Node.js / Express
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Firebase / Supabase
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                MongoDB / MySQL
              </li>
              <li class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                RESTful API / GraphQL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作經驗 -->
    <section class="section">
      <div class="container">
        <h2 class="text-3xl font-bold mb-12 text-center">工作經驗</h2>

        <div class="max-w-3xl mx-auto space-y-12">
          <!-- 經驗項目 1 -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0 }"
            class="relative pl-8 border-l-2 border-primary"
          >
            <div
              class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"
            ></div>
            <div class="mb-2">
              <span
                class="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >2023 - 至今</span
              >
            </div>
            <h3 class="text-xl font-bold mb-2">前端工程師 - 科技公司</h3>
            <p class="text-slate-300 mb-4"></p>
            <ul class="space-y-2 text-slate-400">
              <li>• 1.使用 React + Next.js 建置電商網頁</li>
              <li>
                • 2.與設計師協作,使用 Tailwind CSS 與 daisyUI 快速完成 UI 開發
              </li>
              <li>• 3.React Native 開發電商系統APP與後端介接GraphQL API</li>
            </ul>
          </div>

          <!-- 經驗項目 2 -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 300 } }"
            class="relative pl-8 border-l-2 border-slate-700"
          >
            <div
              class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700"
            ></div>
            <div class="mb-2">
              <span
                class="bg-slate-700/20 text-slate-300 px-3 py-1 rounded-full text-sm font-medium"
                >2018/07 - 2023/10</span
              >
            </div>
            <h3 class="text-xl font-bold mb-2">軟體工程師 - 日懋科技</h3>
            <p class="text-slate-300 mb-4"></p>
            <ul class="space-y-2 text-slate-400">
              <li>• 1.維護舊有桌面應用軟體系統</li>
              <li>• 2.維護開發/新增門禁網站系統</li>
              <li>• 3.手機APP(Android、IOS雙平台)維護</li>
            </ul>
          </div>

          <!-- 經驗項目 3 -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 600 } }"
            class="relative pl-8 border-l-2 border-slate-700"
          >
            <div
              class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700"
            ></div>
            <div class="mb-2">
              <span
                class="bg-slate-700/20 text-slate-300 px-3 py-1 rounded-full text-sm font-medium"
                >2017/07 - 2018/05</span
              >
            </div>
            <h3 class="text-xl font-bold mb-2">JAVA實習生 - 思邦科技</h3>
            <p class="text-slate-300 mb-4"></p>
            <ul class="space-y-2 text-slate-400">
              <li>• 1.協助撰寫 JAVA 專案程式、報表SQL語法撰寫。</li>
              <li>• 2.軟體教學手冊撰寫。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "關於我 | 前端開發作品集",
  description:
    "專業前端開發者作品集，專注於 Vue.js、Nuxt.js 技術棧，展示響應式網站開發、SPA 應用程式等專案實例。",
  ogTitle: "前端開發作品集 | Vue.js & Nuxt.js 專案展示",
  ogDescription: "探索基於 Vue.js 和 Nuxt.js 的專業前端開發作品集。",
  twitterCard: "summary_large_image",
});
</script>
