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
          <div class="chat-header">
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
          <div class="chat-svg">
            <ChatSvg />
          </div>
          <h2 class="select-profile">Select a profile</h2>
          <b-field grouped class="message-field">
            <b-input
              placeholder="Message"
              expanded
              v-model="message"
              :disabled="disabled"
            ></b-input>
            <p class="control">
              <b-button
                icon-right="send"
                class="send-btn"
                :disabled="disabled"
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

export default {
  data() {
    return {
      sidebarOpen: false,
      disabled: true,
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