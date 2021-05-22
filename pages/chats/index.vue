<template>
  <div class="chats-page">
    <AppBar />
    <div class="chats-content">
      <b-sidebar
        class="sidebar-profiles"
        :fullheight="true"
        :fullwidth="false"
        :overlay="false"
        :right="false"
        v-model="sidebarOpen"
      >
        <ChatProfileList />
      </b-sidebar>
      <BackButton />
      <div class="chat-card card-shadow">
        <div class="profile-list">
          <ChatProfileList />
        </div>
        <div class="chat-section">
          <div v-if="getActiveChatUser.selected" class="chat-header">
            <b-button
              @click="sidebarOpen = true"
              icon-right="menu"
              class="sidebar-btn"
            />
            <img
              src="https://images.unsplash.com/photo-1563497425252-36b755215241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Avatar"
              class="avatar"
            />
            <h2 class="name">Doggo Gang</h2>
          </div>
          <div v-if="getActiveChatUser.selected" class="chat-area">
            <div class="sender-message">Heya! How you doing?</div>
            <div class="receiver-message">
              I'm good. Lorem ipsum? Yeah, yeah lorem ipsum. Lo lo lo lo lo ip
              ip ip ip lorem ipsum. Good?
            </div>
            <div class="receiver-message">I'm good.</div>
            <div class="sender-message">
              Good. lorem ipsum. Lo lo lo lo lo ip ip ip ip lorem ipsum.
            </div>
            <div class="sender-message">Good.</div>
          </div>
          <div v-else class="chat-area">
            <ChatSvg />
            <h2 class="select-profile">Select a profile</h2>
          </div>
          <b-field grouped class="message-field">
            <b-input
              placeholder="Message"
              expanded
              v-model="message"
              :disabled="!getActiveChatUser.selected"
            ></b-input>
            <p class="control">
              <b-button
                icon-right="send"
                class="send-btn"
                :disabled="!getActiveChatUser.selected"
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
import BackButton from "../../components/BackButton.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getActiveChatUser"]),
  },
  data() {
    return {
      sidebarOpen: false,
      message: "",
    };
  },
  components: {
    ChatProfileList,
    ChatSvg,
    ChatProfile,
    BackButton,
  },
};
</script>

<style scoped>
.chats-page {
  min-height: 100vh;
}
.chats-content {
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
.chat-header {
  border-bottom: 2px solid #f2e9e6;
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
}
.sender-message {
  background-color: #c21e39;
  border-radius: 0.6rem 0.6rem 0 0.6rem;
  color: #ffffff;
  margin-left: auto;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
  max-width: 80%;
  padding: 1rem;
}
.receiver-message {
  border: 1px solid #939498;
  border-radius: 0.6rem 0.6rem 0.6rem 0;
  color: #050303;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
  max-width: 80%;
  padding: 1rem;
}
.sidebar-btn {
  border-radius: 5rem;
  display: none;
  margin-right: 1rem;
}
.avatar {
  border-radius: 20rem;
  margin-right: 1rem;
  max-width: 40px;
}
.name {
  color: #c21e39;
  font-size: 1.1rem;
  font-weight: 700;
}
.chat-area {
  margin: auto;
}
.chat-area {
  max-height: 470px;
  overflow-y: auto;
}
.chat-area::-webkit-scrollbar {
  width: 1.5rem;
}
.chat-area::-webkit-scrollbar-thumb {
  background-color: #e5ecee;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
.message-field {
  margin-top: 0.5rem;
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
  opacity: 0.5;
  text-align: center;
}
@media only screen and (max-width: 1000px) {
  .profile-list {
    display: none;
  }
  .chat-card {
    grid-template-columns: auto;
    padding: 1rem 0;
  }
  .sidebar-btn {
    display: block;
  }
}
</style>