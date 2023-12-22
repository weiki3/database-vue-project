<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { NButton } from 'naive-ui';
</script>

<template>
  
      <nav>
        <RouterLink to="/"><n-button text-color="white">Home</n-button></RouterLink> |
        <RouterLink to="/gallery"><n-button text-color="white">Gallery</n-button></RouterLink> |
        <RouterLink to="/login"><n-button text-color="white">Login</n-button></RouterLink>
      </nav>

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
