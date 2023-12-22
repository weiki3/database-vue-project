<script setup>
import LoginPart from '@/components/LoginPart.vue';
import ChangePassword from '@/components/ChangePassword.vue';
import RegisterPart from '@/components/RegisterPart.vue';
import { ref } from 'vue';

const goLogin = ref(true); // 必须用响应式对象
const goChange = ref(false);

</script>

<template>
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
</template>

<style scoped>
.loginSwitch {
    text-decoration: underline;
    color: azure;
}
</style>
