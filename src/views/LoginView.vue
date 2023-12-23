<script setup>
import LoginPart from '@/components/LoginPart.vue';
import ChangePassword from '@/components/ChangePassword.vue';
import RegisterPart from '@/components/RegisterPart.vue';
import { ref } from 'vue';
import { NConfigProvider, darkTheme, NCard, NTabs, NTabPane } from 'naive-ui';

const goChange = ref(false);

</script>

<template>
    <n-config-provider :theme="darkTheme">
        <n-card class="n-card">
            <n-tabs default-value="signin" size="large" animated pane-wrapper-style="margin: 0 -4px"
                pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;">
                <n-tab-pane name="signin" tab="Login">
                    <div v-if="goChange">
                        <ChangePassword />
                        <br />
                        <a class="loginSwitch" @click="goChange = !goChange">Back to login</a>
                    </div>
                    <div v-else>
                        <LoginPart />
                        <br />
                        <a class="loginSwitch" @click="goChange = !goChange">If you forget your password, click here</a>
                        <br />
                    </div>
                </n-tab-pane>
                <n-tab-pane name="register" tab="Register">
                    <RegisterPart />
                </n-tab-pane>
            </n-tabs>
        </n-card>
    </n-config-provider>
</template>

<style scoped>
.n-card {
    margin-right: auto;
    margin-top: 10%;
    margin-left: auto;
}

.loginSwitch {
    text-decoration: underline;
    color: azure;
}
</style>
