<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { NCard, NSpace } from 'naive-ui';

const vehicleList = ref([]);
const router = useRouter()


function handleDetails(vehicleId) {
  router.push(
    {
      name: 'detail',
      params: {
        vid: vehicleId
      }
    }
  )
}
onMounted(() => {
  axios.get("/")
    .then(result => {
      vehicleList.value = result.data.data
    })
    .catch(err => {
      console.log(err)
    })
})

</script>
    
<template>
  <div class="photowall" style="position:relative;">
    <h1 class="title">Photo Gallery</h1>
    <n-space justify="space-around">
      <div v-for="vehicle in vehicleList" :key="vehicle.id" class="photo-item" @click="handleDetails(vehicle.id)">
        <n-card :title="vehicle.name" style="border-radius: 10px;">
          <template #cover>
            <img :src="vehicle.picture" :alt="vehicle.name" class="thumbnail" />
          </template>
          {{ vehicle.nation }}
        </n-card>
      </div>

    </n-space>

  </div>
</template>

<style scoped>
.n-card {
  max-width: 300px;
}

.photowall {
  width: 100%;
  font-size: 12px;
  text-align: left;
  margin-right: 60rem;
  margin-top: 2rem;
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

.title {
  padding: 15px;
}
</style>