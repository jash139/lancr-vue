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
            <div v-if="getActiveChatUser.selected" class="user-header">
              <NuxtLink
                v-if="getActiveChatUser.user.profilePicture === ''"
                :to="'/freelancers/' + getActiveChatUser.user.uid"
              >
                <div class="default-avatar">
                  {{ getActiveChatUser.user.name.charAt(0).toUpperCase() }}
                </div>
              </NuxtLink>
              <NuxtLink
                v-else
                :to="'/freelancers/' + getActiveChatUser.user.uid"
              >
                <img
                  :src="getActiveChatUser.user.profilePicture"
                  alt=""
                  class="avatar"
                />
              </NuxtLink>
              <NuxtLink :to="'/freelancers/' + getActiveChatUser.user.uid">
                <h2 class="name">{{ getActiveChatUser.user.name }}</h2>
              </NuxtLink>
            </div>
            <h2 v-else class="name">Select profile</h2>
          </div>
          <div v-if="getActiveChatUser.selected" class="chat-area">
            <div
              v-for="(message, index) in messages"
              :key="message + index"
              :class="[getMessageClass(message.userUID)]"
            >
              {{ message.text }}
            </div>
            <div ref="scrollable" />
          </div>
          <div v-else class="chat-svg-area">
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
                @click="sendMessage"
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
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getActiveChatUser", "getCurrentUser"]),
  },
  data() {
    return {
      sidebarOpen: false,
      db: this.$fire.firestore,
      user: mapGetters(["getCurrentUser"]),
      message: "",
      messages: [],
    };
  },
  components: {
    ChatProfileList,
    ChatSvg,
    ChatProfile,
    BackButton,
  },
  methods: {
    async sendMessage() {
      if (this.message === "") {
        return;
      }
      const messageDetails = {
        userUID: this.getCurrentUser.uid,
        text: this.message,
        createdAt: Date.now(),
      };
      await this.db.collection("messages").add(messageDetails);
      this.message = "";
      this.$refs["scrollable"].scrollIntoView({ behavior: "smooth" });
    },
    getMessageClass(uid) {
      if (uid === this.getCurrentUser.uid) {
        return "sender-message";
      } else {
        return "receiver-message";
      }
    },
  },
  mounted() {
    this.db
      .collection("messages")
      .orderBy("createdAt")
      .onSnapshot((querySnap) => {
        this.messages = querySnap.docs.map((doc) => doc.data());
      });
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
.user-header {
  display: flex;
  align-items: center;
}
.sender-message {
  background-color: #c21e39;
  border-radius: 0.6rem 0.6rem 0 0.6rem;
  color: #ffffff;
  margin-left: auto;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
  max-width: 70%;
  padding: 1rem;
}
.receiver-message {
  border: 1px solid #939498;
  border-radius: 0.6rem 0.6rem 0.6rem 0;
  color: #050303;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
  max-width: 70%;
  padding: 1rem;
}
.sidebar-btn {
  border-radius: 5rem;
  display: none;
  margin-right: 1rem;
}
.default-avatar {
  background-color: #f2e9e6;
  border-radius: 20rem;
  color: #c21e39;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  min-height: 40px;
  min-width: 40px;
  max-width: 40px;
}
.avatar {
  border-radius: 20rem;
  margin-right: 1rem;
  min-width: 40px;
  max-width: 40px;
}
.name {
  color: #c21e39;
  font-size: 1.1rem;
  font-weight: 700;
}
.chat-area {
  margin: auto;
  width: 100%;
  max-height: 470px;
  overflow-y: auto;
}
.chat-svg-area {
  margin: auto;
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