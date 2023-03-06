<script setup lang='ts'>
const { data } = await useFetch('/api/12?z=1')
console.log('data', data)
</script>

<template>
  <div>这是相册页面123</div>
</template>

<style lang="less" scoped>

</style>
