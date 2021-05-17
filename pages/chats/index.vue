<template>
  <div class="chats-page">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="chat-card card-shadow">
        <div class="profiles-desktop">
          profiles kjf k;sa lkds jlasflkakjdkl fewlk alj esd sl; fl adesktop
        </div>
        <div class="chat-section">chats</div>
        <div class="profile">Profidf lksdlsd jflkeahfn. wemalkfh ulje gle</div>
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
  display: grid;
  grid-template-columns: 25% auto 25%;
  margin-top: 1rem;
  min-height: 75vh;
  padding: 2rem;
}
.profiles-desktop {
  border-right: 2px solid #f2e9e6;
  padding: 1rem;
}
.profile {
  border-left: 2px solid #f2e9e6;
  padding: 1rem;
}
</style>