<script setup>
import { reactive } from 'vue'
import useUserStore from "../stores/user"
import { NButton,NCard,NTabs,NTabPane,NForm,NFormItemRow} from 'naive-ui';

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

<template>
    <div>
        <!-- state：通过 store 直接访问 -->
        
        <template v-if="userStore.loginState">
            
            <h2>{{ userStore.hello }}</h2>
            <p>用户 ID：{{ userStore.UserID }}</p>
            <n-button text-color="white" @click="onLogout">退 出</n-button>
        </template>
        <template v-else>
            <n-card title="登录">
        
            <n-form>
                <n-form-item-row label="用户 ID：">
            <input v-model="userData.UserID" />
        </n-form-item-row>
            <n-form-item-row label="密码：">
            <input v-model="userData.password" type="password" />
        </n-form-item-row>
        </n-form>
            <n-button @click="onLogin">登 录</n-button>
    
    </n-card>
        </template>
   
    </div>
</template>

<style scoped>

</style>