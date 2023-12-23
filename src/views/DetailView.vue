<script setup>
import CommentPart from '@/components/CommentPart.vue';
import PhotoWall from '@/components/PhotoWall.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import {NGrid,NGridItem,NDescriptions,
    NDescriptionsItem ,NImage,NBreadcrumb,NBreadcrumbItem} from 'naive-ui';

const details = ref(null);
const photoWall = ref([])
const router = useRouter()
const route = useRoute()

const selectedVehicle = JSON.parse(route.query.vehicleString)

axios.get(`/${route.params.vid}`)
    .then(result => {
        details.value = result.data.data
    })
    .catch(err => {
        console.log(err)
    })

</script>

<template>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" /> -->
    <n-breadcrumb>
    <n-breadcrumb-item>
       gallery</n-breadcrumb-item>
    <n-breadcrumb-item>
      {{details.name}}</n-breadcrumb-item>
    
  </n-breadcrumb>
    <n-grid cols="4" item-responsive>
        <n-grid-item span="0 400:1 600:2 800:3">
            <ul>
                <n-image width="100%" :src="selectedVehicle.picture" :alt="selectedVehicle.name" />
                <n-descriptions title="Details" :column="3">
                    <n-descriptions-item v-for="(value, key) in details"
                        :label="key != 'picture' && key != 'id' ? key : null">
                        <li v-if="key != 'picture' && key != 'id'">
                            {{ value }}
                        </li>
                    </n-descriptions-item>
                </n-descriptions>
            </ul>

        </n-grid-item>
        <n-grid-item>
            <CommentPart :vid="selectedVehicle.id" />
        </n-grid-item>
        <n-grid-item>
            <PhotoWall :vid="selectedVehicle.id" />
        </n-grid-item>
    </n-grid>
</template>

<style scoped>
.parrel {
    place-items: flex-wrap;
}


.comment {
    place-self: "start";
}
</style>