<template>
  <div class="chat-profile-list">
    <h2 class="chat-heading">Chat</h2>
    <!-- Additional feature idea - add search names field -->
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
  padding-right: 3rem;
}
</style>