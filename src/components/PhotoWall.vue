<script setup>
import { ref } from 'vue';
import { NButton, NCard, NUpload, NImage } from 'naive-ui';
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

function uploadPhoto(e) {
    let file = e.target.files[0];
    let param = new FormData(); //创建form对象
    param.append('File', file);//通过append向form对象添加数据
    param.append('id', props.vid)
    // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
    let config = {
        headers: { 'Content-Type': 'multipart/form-data' } //这里是重点，需要和后台沟通好请求头，Content-Type不一定是这个值
    }; //添加请求头
    axios.post('https://localhost:8080/upload/photo', param, config)
        .then(response => {
            if (response.data.state !== 200) {
                alert("Failed to upload!")
            }
        }).catch(() => {
            alert("Failed to upload!")
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
                    <n-image :src="photo.address" class="thumbnail"></n-image>
                </template>
            </n-card>
        </div>
    </div>
    <div class="upload" v-if="userStore.loginState">
        <h3> Upload your photo </h3>
        <input type="file" class="file" name="avatar" accept="image/png, image/jpeg" @change="uploadPhoto" />
    </div>
</template>