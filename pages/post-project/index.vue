<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <BackButton />
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import BackButton from "../../components/BackButton";

export default {
  components: {
    AppBar,
    BackButton,
  },
};
</script>

<style scoped>
.root {
  min-height: 100vh;
  padding-bottom: 1.5rem;
}
.content {
  max-width: 95%;
  margin: auto;
}
</style>