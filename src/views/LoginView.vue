<script setup>
import { reactive } from 'vue'
import useUserStore from "../stores/user"

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
    // userData.UserID = ''
    // userData.password = ''
}

const onLogout = () => {
    userStore.logout()
}
</script>

<template>
    <div>
        <!-- state：通过 store 直接访问 -->
        <template v-if="userStore.password">
            {{ userStore.UserID }}
            <br />
            <button @click="onLogout">退 出</button>
        </template>

        <template v-else>
            用户名：<input v-model="userData.UserID" />
            <br />
            密码：<input v-model="userData.password" type="password" />
            <br />
            <button @click="onLogin">登 录</button>
        </template>
        <div v-if="userStore.password">
            <h2>{{ userStore.hello }}</h2>
            <p>用户 ID：{{ userStore.UserID }}</p>
            <p>用户 email：{{ userStore.email }}</p>
        </div>
    </div>
</template>
