<template>
  <div class="chats-page">
    <AppBar />
    <div class="content">
      <BackButton />
      <ChatSvg />
    </div>
  </div>
</template>

<script>
import ChatSvg from "../../components/ChatSvg";

export default {
  components: {
    ChatSvg,
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