<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { NButton } from 'naive-ui';
import {h, ref} from "vue";
import { NIcon,NMenu,NSplit,NConfigProvider,darkTheme } from "naive-ui";
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon
} from "@vicons/ionicons5";


function renderIcon (icon) {
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
    icon: renderIcon(BookIcon)
  },
])

const activeKey = ref(null)


</script>

<template>
  <n-config-provider :theme="darkTheme">
  
      <n-split :default-size="5">
    <template #1>
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
        responsive
        icon-size=50
        
      />
    </template>
  </n-split>
</n-config-provider>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 50%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 60;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 0rem 0;
    margin-top: 0rem;
  }
}
</style>
