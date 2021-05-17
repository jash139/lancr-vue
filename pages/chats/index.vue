<template>
  <div class="chats-page">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="chat-card card-shadow">
        <div class="profiles-desktop">profiles desktop</div>
        <div class="chat-section">chats</div>
        <div class="profile">Profile</div>
      </div>
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
  padding-bottom: 2rem;
}
.chat-card {
  background-color: #ffffff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  min-height: 75vh;
  padding: 2rem;
}
</style>