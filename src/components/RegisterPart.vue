<script setup>
import { reactive } from 'vue'
import axios from 'axios';
import { NButton, NCard, NTabs, NTabPane, NForm, NFormItemRow } from 'naive-ui';

const registerData = reactive({
    user_name: '',
    email: '',
    password: '',
    userid: '',
})

function flushPassword() {
    changeData.password = ''
}

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
            console.log(error)
            alert("Unknown Error!")
        })
    flushPassword()
}

</script>

<template>
    <div>
            <n-tabs
                class="card-tabs"
                default-value="signin"
                size="large"
                animated
                pane-wrapper-style="margin: 0 -4px"
                pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
                >
      <n-tab-pane name="signin" tab="Register" >
        <n-form>
            <n-form-item-row label="Username: ">
        <input v-model="registerData.user_name" />
                </n-form-item-row>
            <n-form-item-row label=" Email: ">
        <input v-model="registerData.email" />
            </n-form-item-row>
            <n-form-item-row label=" Password: ">
                <input v-model="registerData.password" type="password" />
            </n-form-item-row>
        </n-form>
            <n-button @click="onRegister">Register</n-button>
        </n-tab-pane>
    </n-tabs>
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