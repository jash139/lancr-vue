<template>
  <div class="chats-page">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="chat-card card-shadow">
        <div class="profiles-desktop">
          profiles kjf k;sa lkds jlasflkakjdkl fewlk alj esd sl; fl adesktop
        </div>
        <div class="chat-section">
          <ChatSvg />
          <h2 class="select-profile">Select a profile</h2>
          <b-field grouped>
            <b-input placeholder="Message" expanded v-model="message"></b-input>
            <p class="control">
              <b-button icon-right="send" class="send-btn" />
            </p>
          </b-field>
        </div>
        <div class="profile">Profidf lksdlsd jflkeahfn. wemalkfh ulje gle</div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatSvg from "../../components/ChatSvg";

export default {
  data() {
    return {
      message: "",
    };
  },
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
.chat-section {
  padding: 0 1rem;
}
.send-btn {
  background-color: #c21e39;
  border: none;
  border-radius: 5rem;
  color: #ffffff;
}
.select-profile {
  color: #c21e39;
  font-size: 1.6rem;
  font-weight: 700;
  opacity: 0.3;
}
.profile {
  border-left: 2px solid #f2e9e6;
  padding: 1rem;
}
</style>