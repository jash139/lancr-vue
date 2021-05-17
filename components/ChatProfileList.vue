<template>
  <div class="chat-profile-list">
    <h2 class="chat-heading">Chat</h2>
    <!-- Additional feature idea - add search names field -->
    <div class="profile-list">
      <ChatProfileCard />
      <ChatProfileCard />
      <ChatProfileCard />
      <ChatProfileCard />
      <ChatProfileCard />
      <ChatProfileCard />
      <ChatProfileCard />
      <ChatProfileCard />
      <ChatProfileCard />
      <ChatProfileCard />
      <ChatProfileCard />
    </div>
  </div>
</template>

<script>
import ChatProfileCard from "./ChatProfileCard";

export default {
  name: "ChatProfileList",
  components: {
    ChatProfileCard,
  },
};
</script>

<style scoped>
.chat-heading {
  padding-bottom: 1rem;
}
.chat-profile-list {
  border-right: 2px solid #f2e9e6;
  padding: 1rem;
}
.profile-list {
  max-height: 420px;
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
</style>