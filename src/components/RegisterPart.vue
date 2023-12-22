<script setup>
import { reactive } from 'vue'
import axios from 'axios';

const registerData = reactive({
    user_name: '',
    email: '',
    password: '',
})

const onRegister = async () => {
    axios.get('/users/reg', {
        params: {
            user: registerData.user_name,
            email: registerData.email,
            password: registerData.password,
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

</script>

<template>
    <div>
        <h3>注册用户</h3>
        用户名：<input v-model="registerData.user_name" />
        <br />
        邮箱：<input v-model="registerData.email" />
        <br />
        密码：<input v-model="registerData.password" type="password" />
        <br />
        <button @click="onRegister">注册</button>
    </div>
</template>
