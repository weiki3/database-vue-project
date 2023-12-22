<script setup>
import { reactive } from 'vue'
import axios from 'axios';

const registerData = reactive({
    user_name: '',
    email: '',
    password: '',
    userid: '',
})

const onRegister = async () => {
    if (registerData.user_name === '' || registerData.password === '' || registerData.email === '') {
        alert("用户名、密码、邮箱不能为空")
        return
    }

    axios.get('/users/reg', {
        params: {
            user: registerData.user_name,
            email: registerData.email,
            password: registerData.password,
        }
    })
        .then(function (response) {
            // console.log(response)
            if (response.data.data) {
                registerData.userid = response.data.data
            }
            else { alert("邮箱重复，注册失败！") }
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

        <div v-if="registerData.userid">
            <h4>注册成功</h4>
            <h4>用户 ID：{{ registerData.userid }}</h4>
            <h4 class="emphasized">用户 ID 是登录的凭证之一，请牢记！</h4>
        </div>
    </div>
</template>

<style scoped>
.emphasized {
    text-decoration: underline;
    text-decoration: brown;
}
</style>