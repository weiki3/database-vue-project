<script setup>
import { NCarousel,NCard,NCollapse,NCollapseItem } from 'naive-ui';
import { useRouter } from 'vue-router';
defineProps({
  msg: {
    type: String,
    required: true
  }
})

const router = useRouter()

</script>

<template>
  <n-carousel show-arrow>
    <img class="carousel-img" src="https://cmano-db.com/images/DB3000/aircraft_280.jpg">
    <img class="carousel-img" src="https://cmano-db.com/images/DB3000/aircraft_2463.jpg">
    <img class="carousel-img" src="https://cmano-db.com/images/DB3000/aircraft_3308.jpg">
    <img class="carousel-img" src="https://cmano-db.com/images/DB3000/aircraft_445.jpg">
  </n-carousel>
  <n-card title="about us">
      <h3>This is a Aircraft Gallery Project (Temporarily). To get start, click at the 'gallery' above to get an overview of the aircrafts
        we are interested in and choose one to get details about it, how other users think about it and more photos about it.
      </h3>
      <h3>After you log in the website, comment and uploading photos are allowed. But please attention that please obey the law in China
         when browsing the website.</h3>  
    </n-card>
        
    <n-collapse>
      <n-collapse-item title="青铜" name="1">
      <div>可以</div>
        </n-collapse-item>

    </n-collapse>
         <h3>
        As a final homework for the course Database System Concepts, 
        We desperately try our best to build the website in such a short time.


      </h3>
      
    <h3>Contributors: Yufeng Guan · Weiki3</h3>

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
  max-height: 512px;
  object-fit: cover;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
