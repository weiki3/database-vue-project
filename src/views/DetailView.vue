<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const details = ref(null);
const comments = ref([]);
const photoWall = ref([]);
const router = useRouter()
const route = useRoute()

const selectedVehicle = JSON.parse(route.query.vehicleString)

axios.get(`http://localhost:8080/${route.params.vid}`)
    .then(result => {
        details.value = result.data.data
    })
    .catch(err => {
        console.log(err)
    })
axios.get(`http://localhost:8080/${route.params.vid}/commentpage`)
    .then(result => {
        comments.value = result.data.data
    })
    .catch(err => {
        console.log(err)
    })
axios.get(`http://localhost:8080/${route.params.vid}/photowall`)
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
            <ul>
                <li v-for="comment in comments" :key="comment.id">
                    {{ comment }}
                </li>
            </ul>
            <h2>Photo Wall</h2>
            <ul>
                <li v-for="photo in photoWall" :key="photo.id">
                    {{ photo }}
                </li>
            </ul>
        </div>

    </div>
</template>