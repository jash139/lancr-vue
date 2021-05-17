<template>
  <div class="chats-page">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="chat-card card-shadow">
        <div class="profiles-desktop">
          <div class="profiles-list">
            profiles kjf k;sa lkds jlasflkakjdkl fewlk alj esd sl; fl adesktop
          </div>
          <div class="divider" />
        </div>
        <div class="chat-section">chats</div>
        <div class="profile">
          <div class="divider" />
          <div class="profile-details">
            Profidf lksdlsd jflkeahfn. wemalkfh ulje gle
          </div>
        </div>
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
.divider {
  background-color: red;
  border-radius: 2rem;
  margin: 0 1rem;
  min-height: 70vh;
  width: 2px;
}
.profiles-desktop,
.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 320px;
}
</style>