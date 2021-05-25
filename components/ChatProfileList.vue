<template>
  <div class="chat-profile-list">
    <h2 class="chat-heading">Chat</h2>
    <!-- Additional feature idea - add search names field -->
    <div class="profile-list">
      <ChatProfileCard
        v-for="connection in connections(currentUser.connections)"
        :key="connection.uid"
        :user="connection"
      />
    </div>
  </div>
</template>

<script>
import ChatProfileCard from "./ChatProfileCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ChatProfileList",
  components: {
    ChatProfileCard,
  },
  computed: {
    ...mapGetters({
      connections: "getCurrentUserConnections",
      currentUser: "getCurrentUser",
    }),
  },
  methods: {
    ...mapActions(["fetchAllFreelancers"]),
  },
  created() {
    this.fetchAllFreelancers();
  },
};
</script>

<style scoped>
.chat-heading {
  font-size: 1.3rem;
  font-weight: 700;
}
.chat-profile-list {
  border-right: 2px solid #f2e9e6;
}
.profile-list {
  max-height: 470px;
  overflow-y: auto;
}
.profile-list::-webkit-scrollbar {
  width: 1.5rem;
}
.profile-list::-webkit-scrollbar-thumb {
  background-color: #e5ecee;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
@media only screen and (max-width: 1000px) {
  .chat-profile-list {
    border: none;
  }
  .profile-list {
    max-height: unset;
  }
}
</style>