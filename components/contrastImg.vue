<script setup lang="ts">
// TODO vueuse的useMouseInElement有bug似乎，handleOutside为false时，仍然会触发监听，抽空看看是什么原因
const target = ref(null)
const { x, isOutside } = useMouseInElement(target, { handleOutside: false })
const { width: windowWidth } = useWindowSize()
const afterContainerWidth = computed(() => {
  // if (isOutside.value) return 0
  return windowWidth.value - x.value
})
watch(isOutside, () => {
  console.log('isOutside', isOutside.value)
})
</script>

<template>
  <div ref="target" w-screen h-screen relative>
    <div class="before" w-screen h-screen bg-center bg-cover bg-no-repeat />
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
  width: v-bind(`${afterContainerWidth}px`);
}
.after-bg {
  background-image: url('../assets/after.jpeg');
  width: v-bind(`${windowWidth}px`);
}
</style>
