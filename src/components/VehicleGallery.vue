<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const vehicleList = ref([]);
const router = useRouter()

function handleDetails(vehicle) {
  let vehicleString = JSON.stringify(vehicle)
  router.push(
    {
      name: 'detail',
      params: {
        vid: vehicle.id
      },
      query: { vehicleString }
    }
  )
}

axios.get("http://localhost:8080")
  .then(result => {
    vehicleList.value = result.data.data
  })
  .catch(err => {
    console.log(err)
  })

</script>

<template>
  <div>
    <h1>Photo Gallery</h1>
    <div v-for="vehicle in vehicleList" :key="vehicle.id" class="photo-item">
      <img :src="vehicle.picture" :alt="vehicle.name" class="thumbnail" @click="handleDetails(vehicle)" />
    </div>
  </div>
</template>
