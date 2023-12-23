<script setup>
import { ref } from 'vue';
import { NButton, NCard, NUpload } from 'naive-ui';
import axios from 'axios';
import useUserStore from "../stores/user"

const props = defineProps(['vid'])
const photoWall = ref([]);
const userStore = useUserStore()

function getPhotoWall() {
    axios.get(`/${props.vid}/photowall`)
        .then(result => {
            photoWall.value = result.data.data
            // console.log(photoWall.value[0])
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
        <div class="uploadPage">
            <n-upload action="https://localhost:8080/upload/photo" :method="POST" :data="{
                'id': props.vid
            }">
                <n-button>上传文件</n-button>
            </n-upload>
        </div>
    </div>
</template>