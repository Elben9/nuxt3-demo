<script setup lang="ts">
const target = ref(null)
const { elementX } = useMouseInElement(target, { handleOutside: false })
const { width } = useWindowSize()
const windowWidth = computed(() => {
  return `${width.value}px`
})
const afterContainerWidth = computed(() => {
  return `${width.value - elementX.value}px`
})
</script>

<template>
  <div ref="target" width="100%" h-screen relative>
    <div class="before" width="100%" h-screen bg-center bg-cover bg-no-repeat />
    <div class="after-container" absolute top-0 right-0 overflow-hidden z-3 h-screen>
      <div class="after-bg" absolute top-0 right-0 h-screen bg-center bg-cover bg-no-repeat />
      <span />
    </div>
  </div>
</template>

<style scoped>
.before {
  background-image: url('../assets/before.jpeg');
}
.after-container {
  width: v-bind(afterContainerWidth);
}
.after-bg {
  background-image: url('../assets/after.jpeg');
  width: v-bind(windowWidth);
}
</style>
