<script setup>
import CommentPart from '@/components/CommentPart.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const details = ref(null);

const router = useRouter()
const route = useRoute()

const selectedVehicle = JSON.parse(route.query.vehicleString)

axios.get(`https://localhost:8080/${route.params.vid}`)
    .then(result => {
        details.value = result.data.data
    })
    .catch(err => {
        console.log(err)
    })

axios.get(`https://localhost:8080/${route.params.vid}/photowall`)
    .then(result => {
        photoWall.value = result.data.data
    })
    .catch(err => {
        console.log(err)
    })

</script>

<template>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" /> -->

    <div>
        <div>
            <h2>Details</h2>
            <img :src="selectedVehicle.picture" :alt="selectedVehicle.name" />
            <ul>
                <li v-for="(value, key) in details">
                    {{ key }}:{{ value }}
                </li>
            </ul>
            <h2>Comments</h2>
            <CommentPart :vid="selectedVehicle.id" />
            <h2>Photo Wall</h2>
            <ul>
                <li v-for="photo in photoWall" :key="photo.id">
                    {{ photo }}
                </li>
            </ul>
        </div>

    </div>
</template>