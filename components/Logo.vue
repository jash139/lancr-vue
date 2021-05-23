<template>
  <NuxtLink to="/" class="link">
    <h2 class="logo" @click="scrollToTop"><span class="e">E</span>rrands</h2>
  </NuxtLink>
</template>

<script>
import { scrollToTop } from "../assets/methods";

export default {
  name: "Logo",
  methods: {
    scrollToTop: () => scrollToTop(),
  },
};
</script>

<style scoped>
.logo {
  color: #050303;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
}
.e {
  color: #c21e39;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>