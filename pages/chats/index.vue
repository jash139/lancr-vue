<template>
  <div class="chats-page">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="chat-card card-shadow">
        <div class="profile-list">
          <ChatProfileList />
        </div>
        <div class="chat-section">
          <div class="chat-svg">
            <ChatSvg />
          </div>
          <h2 class="select-profile">Select a profile</h2>
          <b-field grouped class="message-field">
            <b-input
              placeholder="Message"
              expanded
              v-model="message"
              :disabled="enabled"
            ></b-input>
            <p class="control">
              <b-button
                icon-right="send"
                class="send-btn"
                :disabled="enabled"
              />
            </p>
          </b-field>
        </div>
        <ChatProfile />
      </div>
    </div>
  </div>
</template>

<script>
import ChatProfileList from "../../components/ChatProfileList";
import ChatSvg from "../../components/ChatSvg";
import ChatProfile from "../../components/ChatProfile";

export default {
  data() {
    return {
      enabled: true,
      message: "",
    };
  },
  components: {
    ChatProfileList,
    ChatSvg,
    ChatProfile,
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
.chat-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
}
.chat-svg {
  margin: auto;
}
.message-field {
  margin-top: 2rem;
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
  text-align: center;
}
@media only screen and (max-width: 1000px) {
  .profile-list {
    display: none;
  }
  .chat-card {
    grid-template-columns: auto;
  }
}
</style>