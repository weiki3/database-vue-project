<script setup>
import { reactive } from 'vue'
import axios from 'axios';

import { NButton, NFormItemRow, NAlert } from 'naive-ui';

const changeData = reactive({
    email: '',
    password: '',
    userid: '',
})

function flushPassword() {
    changeData.password = ''
}

const onChange = async () => {
    if (changeData.password === '' || changeData.email === '') {
        alert("Email and password cannot be empty!")
        return
    }

    axios.get('/users/Forgetpassword', {
        params: {
            email: changeData.email,
            password: changeData.password,
        }
    })
        .then(function (response) {
            if (response.data.state = '200') {
                changeData.userid = response.data.data
            }
            else { alert("Email not found") }
        })
        .catch(function (error) {
            console.log(error)
            alert("Unknown Error!")
        })
    flushPassword()
}

</script>

<template>
    <div>
        <h3>Change Password</h3>
        <br />
        <n-form-item-row label="Email: ">
            <input v-model="changeData.email" />
        </n-form-item-row>
        <n-form-item-row label="New password: ">
            <input v-model="changeData.password" type="password" />
        </n-form-item-row>

        <n-button @click="onChange">Change</n-button>

        <div v-if="changeData.userid">
            <br />
            <n-alert title="New Pasword Info" type="info" closable>
                <h4>Change password success!</h4>
                <h4>User ID: {{ changeData.userid }}</h4>
                <h4 class="emphasized">User ID is one of the login certificate, please remember!</h4>
            </n-alert>
        </div>
    </div>
</template>

<style scoped>
.emphasized {
    text-decoration: underline;
    text-decoration: brown;
}
</style>