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

        <div v-if="getActiveChatUser.selected" class="chat-container">
          <div class="chat-header">
            <b-button
              @click="sidebarOpen = true"
              icon-right="menu"
              class="sidebar-btn"
            />
            <NuxtLink :to="'/freelancers/' + getActiveChatUser.user.uid">
              <h2 class="name">{{ getActiveChatUser.user.name }}</h2>
            </NuxtLink>
          </div>

          <ul class="chat">
            <li
              v-for="(message, index) in messages"
              :key="message + index"
              :class="[getMessageClass(message)]"
            >
              <p>{{ message.text }}</p>
            </li>
          </ul>
          <div ref="scrollable" />
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

        <div v-else class="chat-svg-area">
          <div class="chat-header">
            <b-button
              @click="sidebarOpen = true"
              icon-right="menu"
              class="sidebar-btn"
            />
          </div>
          <ChatSvg />
          <h2 class="select-profile">Select a profile</h2>
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
        senderUID: this.getCurrentUser.uid,
        receiverUID: this.getActiveChatUser.user.uid,
        text: this.message,
        createdAt: Date.now(),
      };
      await this.db.collection("messages").add(messageDetails);
      this.message = "";
      this.$refs["scrollable"].scrollIntoView({ behavior: "smooth" });
    },
    getMessageClass(message) {
      const senderUID = message.senderUID;
      const receiverUID = message.receiverUID;

      if (
        senderUID === this.getCurrentUser.uid &&
        receiverUID === this.getActiveChatUser.user.uid
      ) {
        return "message sender";
      } else if (
        senderUID === this.getActiveChatUser.user.uid &&
        receiverUID === this.getCurrentUser.uid
      ) {
        return "message receiver";
      } else {
        return "hide-message";
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

.chat-header {
  background-color: #ffffff;
  border-bottom: 1px solid #f2e9e6;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 5;
}

.sidebar-btn {
  border-radius: 5rem;
  display: none;
  margin-right: 1rem;
}

.name {
  color: #c21e39;
  font-size: 1.1rem;
  font-weight: 700;
}
.chat-svg-area {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.select-profile {
  color: #c21e39;
  font-size: 1.6rem;
  font-weight: 700;
  opacity: 0.5;
  text-align: center;
}
.chat-container {
  max-width: 100%;
  max-height: 75vh;
  overflow-y: auto;
  padding: 0 1rem;
  position: relative;
}
.chat-container::-webkit-scrollbar {
  width: 1.5rem;
}
.chat-container::-webkit-scrollbar-thumb {
  background-color: #e5ecee;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}

.chat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.message {
  position: relative;
  margin-bottom: 1.5rem;
  max-width: 80%;
}

.message.receiver {
  border-radius: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.8rem;
  background-color: #fff;
  border: 2px solid #cccccc;
  text-align: left;
}

.message.sender {
  align-self: flex-end;
  border-radius: 0.5rem 0.5rem 0 0.5rem;
  padding: 0.8rem;
  background-color: #c21e39;
  color: #ffffff;
}

.hide-message {
  display: none;
}

.avatar {
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 10px;
  top: -10px;
  width: 45px;
  height: 45px;
  border: 2px solid #b8c4cc;
}

.message.sender .avatar {
  left: auto;
  right: 10px;
  border-color: #c21e39;
}

.message p {
  margin: 0;
}

.message-field {
  margin-top: 0.2rem;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.send-btn {
  background-color: #c21e39;
  border: none;
  border-radius: 5rem;
  color: #ffffff;
}

@media only screen and (max-width: 1000px) {
  .profile-list {
    display: none;
  }
  .chat-card {
    grid-template-columns: auto;
    padding: 0 0 1rem;
  }
  .sidebar-btn {
    display: block;
  }
}
</style>