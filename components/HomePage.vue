<script setup lang='ts'>
const { data } = await useFetch('http://shibe.online/api/shibes', {
  query: {
    count: 10,
    urls: true,
    httpsUrls: false,
  },
})

const slides = ref(new Array(10).fill(0).map(() => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'
  return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))
</script>

<template>
  <!-- modules: SwiperEffectCreative SwiperEffectCards -->
  <div py-10>
    <Swiper
      :height="300" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
      effect="creative"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(slide, idx) in slides" :key="idx" :style="`background-color: ${slide.bg};color: ${slide.color}`">
        {{ idx }}
      </SwiperSlide>
    </Swiper>
    <Swiper
      class="swiper-cards" :width="400" :modules="[SwiperAutoplay, SwiperEffectCards]" :loop="true"
      :slides-per-view="1" effect="cards" :autoplay="{ delay: 8000, disableOnInteraction: true }"
    >
      <SwiperSlide v-for="(img, idx) in data" :key="idx">
        <img :src="img" alt="">
      </SwiperSlide>
    </Swiper>
    <ContrastImg mx-auto my-20 />
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
}
.swiper-wrapper {
  min-height: 20vh;
  width: 100%;
}
.swiper-cards {
  width: 240px;
  margin-top: 30px;
}
</style>
