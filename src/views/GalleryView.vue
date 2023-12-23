<script setup>
import { useRouter } from 'vue-router';
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
        <!--图片缺失的不展示--->
        <n-card v-if="vehicle.picture !== '0'" :title="vehicle.name" style="border-radius: 10px;">
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

.title {
  display: flex;
  justify-content: center;
}
</style>