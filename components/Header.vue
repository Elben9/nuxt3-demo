<script setup lang='ts'>
function signIn() {
  console.log('signIn')
}

function showPopup() {
  console.log('showPopup')
}
</script>

<template>
  <header class="px-10 sticky top-0 z-999 flex justify-between items-center h-15 bg-white shadow">
    <div class="font-500 text-xl select-none">
      闪传开放平台
    </div>
    <div class="flex w-100 last-children: mr-0" children="cursor-pointer hover:color-blue w-100 mr-5 h-10 lh-10">
      <div class="relative group">
        开放能力
        <div class="max-h-0 group-hover:max-h-screen top-10 left--2 transition-max-h duration-300 absolute w-25 rounded z-9 color-black bg-white py-1 text-14px shadow-2xl overflow-hidden box-border" children="block h-8 lh-8" hover:children="color-blue bg-#EEE">
          <NuxtLink to="/album">
            图片直播
          </NuxtLink>
          <NuxtLink to="/ai">
            AI修图
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="https:www.baidu.com">
        文档中心
      </NuxtLink>
      <div @click="showPopup">
        联系我们
      </div>
      <div @click="signIn">
        登录/注册
      </div>
    </div>
  </header>
</template>
