<script setup>
import { reactive } from 'vue'
import useUserStore from "../stores/user"
import { NButton, NForm, NFormItemRow } from 'naive-ui';

const userData = reactive({
    UserID: '',
    password: '',
})

// 实例化 store
const userStore = useUserStore()

const onLogin = async () => {
    // 使用 actions，当作函数一样直接调用
    // login action 定义为了 async 函数，所以它返回一个 Promise
    await userStore.login(userData)
    userData.UserID = ''
    userData.password = ''
}

const onLogout = () => {
    userStore.logout()
}
</script>

const changePassword() {

}

<template>
    <div>
        <template v-if="userStore.loginState">
            <h3 class="userid">User ID: {{ userStore.UserID }}</h3>
            <br />
            <n-button text-color="white" @click="onLogout">Exit</n-button>
        </template>
        <template v-else>
            <n-form>
                <n-form-item-row label="User ID: ">
                    <input v-model="userData.UserID" />
                </n-form-item-row>
                <n-form-item-row label="Password: ">
                    <input v-model="userData.password" type="password" />
                </n-form-item-row>
            </n-form>
            <n-button @click="onLogin">Login</n-button></template>
    </div>
</template>

<style scoped>
.n-card {
    margin-right: auto;
    margin-top: 10%;
    margin-left: auto;
}

.userid {
    font-size: large;
    border-bottom: 1px solid #dbdbdb;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}
</style>