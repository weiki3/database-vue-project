<script setup>
import { ref, reactive } from 'vue';
import useUserStore from "../stores/user"
import axios from 'axios';

const props = defineProps(['vid'])
const comments = ref([]);
const myComment = reactive({
    content: '',
    point: ''
})

const userStore = useUserStore()

function getComments() {
    axios.get(`/${props.vid}/commentpage`)
        .then(response => {
            comments.value = response.data.data
        })
        .catch(error => {
            console.log(error)
        })
}

function flushMyComment() {
    myComment.content = ''
    myComment.point = ''
}

function pushComment() {
    if (!userStore.loginState) {
        alert("Please login first!")
        flushMyComment()
        return
    }
    if (!myComment.content || !myComment.point) {
        alert("Empty comment or point is not allowed!")
        flushMyComment()
        return
    }
    axios.postForm(`/comment/${props.vid}`, {
        vehicleID: props.vid,
        content: myComment.content,
        userID: userStore.UserID,
        point: myComment.point
    })
        .then(response => {
            flushMyComment()
        })
        .catch(error => {
            console.log(error)
            alert("Failed to summit comment!")
        })
    getComments()
}

getComments()

</script>

<template>
    <div>
        <div class="display">
            <ul>
                <div v-for="(comment, index) in comments" :key="comment.userID">
                    <p>User ID: {{ comment.userID }}</p>
                    <p>Point: {{ comment.point }}</p>
                    <p>Comment: {{ comment.content }}</p>
                </div>
            </ul>
        </div>

        <div class="submit" v-if="userStore.loginState">
            <h3> Summit your comment </h3>
            <input v-model="myComment.content">
            <h3> Give your point </h3>
            <input v-model="myComment.point">
            <br />
            <button @click="pushComment()">Summit</button>
        </div>


    </div>
</template>