<script setup>
import LoginPart from '@/components/LoginPart.vue';
import ChangePassword from '@/components/ChangePassword.vue';
import RegisterPart from '@/components/RegisterPart.vue';
import { ref } from 'vue';
import {NConfigProvider,darkTheme,NCard, NTabs} from 'naive-ui';
const goLogin = ref(true); // 必须用响应式对象
const goChange = ref(false);

</script>

<template>
    <n-config-provider :theme="darkTheme">
    <n-card class="n-card">
    <div v-if="goLogin">
        <div v-if="goChange">
            <ChangePassword />
            <a class="loginSwitch" @click="goChange = !goChange">Back to login</a>
        </div>
        <div v-else>
            <LoginPart />
            <a class="loginSwitch" @click="goChange = !goChange">If you forget your password, click here</a>
            <br />
            <a class="loginSwitch" @click="goLogin = !goLogin">Register</a>
        </div>



    </div>
    <div v-else>
        <RegisterPart />
        <a class="loginSwitch" @click="goLogin = !goLogin">Login</a>
    </div>
</n-card>
</n-config-provider>
</template>

<style scoped>
.n-card{
    margin-right: auto;
    margin-top: 10%;
    margin-left: auto;
}

.loginSwitch {
    text-decoration: underline;
    color: azure;
}
</style>
