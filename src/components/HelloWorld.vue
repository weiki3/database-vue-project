<script setup>
import { NCarousel } from 'naive-ui';

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <n-carousel show-arrow>
    <img class="carousel-img" src="https://cmano-db.com/images/DB3000/aircraft_280.jpg">
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
  </n-carousel>
  <div class="greetings">
    <h1>about us</h1>
    <h3>
      This is a Aircraft Gallery Project (Temporarily)</h3>
    <h3>Contributors: Yufeng Guan · Weiki3</h3>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1 {
  text-align: center;
}

.greetings h3 {
  text-align: center;
}

.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
