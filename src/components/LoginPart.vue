<script setup>
import { reactive } from 'vue'
import useUserStore from "../stores/user"
import { NButton, NCard, NTabs, NTabPane, NForm, NFormItemRow } from 'naive-ui';

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
        <!-- state 通过 store 直接访问 -->
        
        <template v-if="userStore.loginState">

            <h2>{{ userStore.hello }}</h2>
            <p>User ID: {{ userStore.UserID }}</p>
            <n-button text-color="white" @click="onLogout">Exit</n-button>
        </template>
        <template v-else>
                <n-tabs
                default-value="signin"
                size="large"
                animated
                pane-wrapper-style="margin: 0 -4px"
                pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
                >
                    <n-tab-pane name="signin" tab="Login">
                <n-form>
                    <n-form-item-row label="User ID: ">
                        <input v-model="userData.UserID" />
                    </n-form-item-row>
                    <n-form-item-row label="Password: ">
                        <input v-model="userData.password" type="password" />
                    </n-form-item-row>
                </n-form>
                <n-button @click="onLogin">Login</n-button>
            </n-tab-pane>
            </n-tabs>
        </template>

    </div>
</template>

<style scoped>
.n-card{
    margin-right: auto;
    margin-top: 10%;
    margin-left: auto;
}
</style>