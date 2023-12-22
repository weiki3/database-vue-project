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
        alert("Username, email and password cannot be empty!")
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
            else { alert("Duplicated email, failed to register!") }
        })
        .catch(function (error) {
            console.log(error);
        })
}

</script>

<template>
    <div>
        <h3>Register</h3>
        Username: <input v-model="registerData.user_name" />
        <br />
        Email: <input v-model="registerData.email" />
        <br />
        Password: <input v-model="registerData.password" type="password" />
        <br />
        <button @click="onRegister">Register</button>

        <div v-if="registerData.userid">
            <h4>Register success!</h4>
            <h4>User ID: {{ registerData.userid }}</h4>
            <h4 class="emphasized">User ID is one of the login certificate, please remember!</h4>
        </div>
    </div>
</template>

<style scoped>
.emphasized {
    text-decoration: underline;
    text-decoration: brown;
}
</style>