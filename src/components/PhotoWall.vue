<script setup>
import { ref, onMounted } from 'vue';
import { NImage, NDivider, NSpace } from 'naive-ui';
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
    axios.post('/upload/photo', param, config)
        .then(response => {
            // 在不同的浏览器可能会触发 fail，待解决
            if (response.data.state !== 200) {
                alert("Check upload result!")
                console.log(response)

            }
        }).catch((error) => {
            alert("Check upload result!")
            console.log(error)

        }).finally(() => {
            // console.log(response)
        }

        )
    // location.reload()
}

onMounted(() => {
    getPhotoWall()
})


</script>

<template>
    <div class="upload" v-if="userStore.loginState">
        <n-divider> You can upload photos here </n-divider>
        <input type="file" class="file" name="avatar" accept="image/png, image/jpeg" @change="uploadPhoto" />
        <n-divider></n-divider>
    </div>
    <div v-else>
        <n-divider>You can upload photos after login</n-divider>
    </div>
    <h1>Photo Wall</h1>
    <n-space vertical>
        <div v-for="photo in photoWall" :key="photo.id" class="photo-item" style="display: inline-block;">
            <n-image :src="photo.address" class="thumbnail" />
        </div>
    </n-space>
</template>

<style scoped>
.class-item {
    margin-left: 0;
}
</style>