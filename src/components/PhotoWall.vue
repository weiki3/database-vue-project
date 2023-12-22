<script setup>
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps(['vid'])
const photoWall = ref([]);

function getPhotoWall() {
    axios.get(`https://localhost:8080/${route.params.vid}/photowall`)
        .then(result => {
            photoWall.value = result.data.data
        })
        .catch(err => {
            console.log(err)
        })
}
getPhotoWall()

</script>

<template>
    <div class="photowall" style="position:relative;">
        <h1>Photo Wall</h1>
        <div v-for="photo in photoWall" :key="photo.id" class="photo-item">
            <n-card>
                <template #cover>
                    <img :src="photo.address" class="thumbnail" />
                </template>
            </n-card>
        </div>
    </div>
    <div class="upload" v-if="userStore.loginState">
        <h3> Upload your photo </h3>
    </div>
</template>