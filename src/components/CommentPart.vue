<script setup>
import { ref, reactive, onMounted } from 'vue';
import useUserStore from "../stores/user"
import axios from 'axios';
import { NList, NListItem, NRate, NTag } from 'naive-ui';

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
    location.reload()
}

onMounted(() => {
    getComments()
})

</script>

<template>
    <div>
        <div class="display">
            <n-list hoverable clickable>
                <h1 class="hh1">Comment</h1>
                <n-list-item v-for="(comment, index) in comments">
                    <n-tag :bordered="false" type="info" size="small">
                        User ID: {{ comment.userID }}</n-tag><br />
                    <n-rate readonly :value="(comment.point / 2)" allow-half="true" />
                    <p> {{ comment.content }}</p>
                </n-list-item>
            </n-list>
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

<style scoped>
.hh1 {
    margin-left: 10%;
}
</style>