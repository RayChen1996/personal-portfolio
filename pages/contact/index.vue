<template>
  <div>
    <!-- 頁面標題 -->
    <section class="pt-24 pb-12 bg-slate-800/30">
      <div class="container">
        <h1 class="text-4xl font-bold mb-4">聯絡我</h1>
        <p class="text-xl text-slate-300 max-w-3xl">
          如果您有任何專案需求或合作機會，請隨時與我聯繫。
        </p>
      </div>
    </section>

    <!-- 聯絡表單與資訊 -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 聯絡資訊 -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :enter="{ opacity: 1, x: 0 }"
          >
            <h2 class="text-2xl font-bold mb-6">聯絡資訊</h2>

            <div class="space-y-8">
              <div class="flex items-start">
                <div class="rounded-full bg-primary/20 p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
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
                </div>
                <div>
                  <h3 class="text-lg font-medium mb-1">Email</h3>
                  <p class="text-slate-300">
                    <a
                      href="mailto:ray.10315332@gmail.com<"
                      class="hover:text-primary transition-colors"
                      >ray.10315332@gmail.com</a
                    >
                  </p>
                  <p class="text-sm text-slate-400 mt-1">隨時歡迎來信詢問</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="rounded-full bg-primary/20 p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium mb-1">回覆時間</h3>
                  <p class="text-slate-300">通常在 24-48 小時內回覆</p>
                  <p class="text-sm text-slate-400 mt-1">工作日可能會更快</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="rounded-full bg-primary/20 p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium mb-1">所在地區</h3>
                  <p class="text-slate-300">台灣，台中</p>
                  <p class="text-sm text-slate-400 mt-1">也可遠端合作</p>
                </div>
              </div>
            </div>

            <!-- 社群連結 -->
            <div class="mt-12">
              <h3 class="text-lg font-medium mb-4">社群連結</h3>
              <div class="flex space-x-4">
                <a
                  href="https://github.com/RayChen1996"
                  target="_blank"
                  class="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors"
                >
                  <svg
                    class="w-6 h-6 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ray-chen-13317a19a/"
                  target="_blank"
                  class="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors"
                >
                  <svg
                    class="w-6 h-6 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  class="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-colors"
                >
                  <svg
                    class="w-6 h-6 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

useSeoMeta({
  title: "聯絡我 | 前端開發作品集",
  description:
    "專業前端開發者作品集，專注於 Vue.js、Nuxt.js 技術棧，展示響應式網站開發、SPA 應用程式等專案實例。",
  ogTitle: "前端開發作品集 | Vue.js & Nuxt.js 專案展示",
  ogDescription: "探索基於 Vue.js 和 Nuxt.js 的專業前端開發作品集。",
  twitterCard: "summary_large_image",
});
// 表單狀態
const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

// 表單提交處理 (模擬)
const handleSubmit = () => {
  isSubmitting.value = true;

  // 模擬 API 請求
  setTimeout(() => {
    isSubmitting.value = false;
    showSuccess.value = true;

    // 重置表單
    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";

    // 3秒後隱藏成功訊息
    setTimeout(() => {
      showSuccess.value = false;
    }, 3000);
  }, 1500);
};
</script>
