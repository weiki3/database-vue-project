<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { NButton } from 'naive-ui';
import { h, ref } from "vue";
import { NIcon, NMenu, NSplit, NConfigProvider, darkTheme, NLayoutHeader, NGlobalStyle } from "naive-ui";
import {
  AirplaneOutline as BookIcon,
  HomeOutline as HomeIcon,
  KeyOutline as key,
} from "@vicons/ionicons5";

import useUserStore from "./stores/user"

// 刷新保证登录状态
const userStore = useUserStore()

if (userStore.loginState) {
  userStore.keepLogin()
} else {
  userStore.logout()
}


function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = ref([
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "home",
        }
      },
      { default: () => "Home" }
    ),
    key: "go-back-home",
    icon: renderIcon(HomeIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "gallery",
        }
      },
      { default: () => "Gallery" }
    ),
    key: "go-to-gallery",
    icon: renderIcon(BookIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "login",
        }
      },
      { default: () => "Login" }
    ),
    key: "go-to-Login",
    icon: renderIcon(key)
  },
])

const activeKey = ref(null)


</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />

    <n-layout-header>
      <n-split :default-size="5">
        <template #1>
          <div class="flex-center">
            <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" responsive icon-size=30 />
          </div>
        </template>
      </n-split>
    </n-layout-header>
    <RouterView />
  </n-config-provider>
</template>


<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>
