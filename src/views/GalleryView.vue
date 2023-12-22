<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import {NCard} from 'naive-ui';

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
      <div v-for="vehicle in vehicleList" :key="vehicle.id" class="photo-item" @click="handleDetails(vehicle)">
      <n-card :title="vehicle.name"  >
      <template #cover>
        <img :src="vehicle.picture" :alt="vehicle.name" class="thumbnail"  />
      </template>
      {{vehicle.nation}}
    </n-card>
    </div>
  </div>
</template>

<style scoped>
.n-card {
  max-width: 300px;
}

.photo-item {
  cursor: pointer;
  margin: 10px;
  display: inline-block;
}

.thumbnail {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>