<script setup>
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps(['vid'])
const comments = ref([]);

function getComments() {
    axios.get(`http://localhost:8080/${props.vid}/photowall`)
        .then(result => {
            photoWall.value = result.data.data
        })
        .catch(err => {
            console.log(err)
        })
}
getComments()

</script>

<template>
    <div>
        <ul>
            <li v-for="(comment, index) in comments" :key="index">
                {{ comment }}
            </li>
        </ul>
    </div>
</template>