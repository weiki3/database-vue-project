<script setup>
import LoginPart from '@/components/LoginPart.vue';
import RegisterPart from '@/components/RegisterPart.vue';
import { ref } from 'vue';

const goLogin = ref(true); // 必须用响应式对象

</script>

<template>
    <div v-if="goLogin">
        <LoginPart />
        <a class="loginSwitch" @click="goLogin = !goLogin">注册用户</a>
    </div>
    <div v-else>
        <RegisterPart />
        <a class="loginSwitch" @click="goLogin = !goLogin">登录用户</a>
    </div>
</template>

<style scoped>
.loginSwitch {
    text-decoration: underline;
    color: azure;
}
</style>
