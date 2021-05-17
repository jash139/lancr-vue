<template>
  <div class="chats-page">
    <AppBar />
    <div class="content">
      <BackButton />
      chats{{ $route.params.id }}
    </div>
  </div>
</template>

<script>
import AppBar from "../../../components/AppBar";
import BackButton from "../../../components/BackButton";

export default {
  components: {
    AppBar,
    BackButton,
  },
};
</script>

<style scoped>
.chats-page {
  min-height: 100vh;
}
.content {
  max-width: 95%;
  margin: auto;
}
</style>