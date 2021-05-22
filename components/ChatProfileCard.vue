<template>
  <div class="chat-profile-card">
    <div class="body">
      <div
        :class="
          getActiveChatUser.selected
            ? getActiveChatUser.user.uid === uid
              ? 'indicator indicator-active'
              : 'indicator'
            : 'indicator'
        "
      />
      <img
        src="https://images.unsplash.com/photo-1563497425252-36b755215241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="Avatar"
        class="avatar"
      />
      <h2 class="name">Doggo Gang</h2>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ChatProfileCard",
  props: {
    uid: {
      type: String,
    },
  },
  computed: {
    ...mapGetters(["getActiveChatUser"]),
  },
  methods: {
    ...mapActions(["fetchActiveChatUser"]),
  },
};
</script>

<style scoped>
.chat-profile-card {
  cursor: pointer;
}
.indicator {
  background-color: transparent;
  border-radius: 2rem;
  max-height: 50px;
  width: 2px;
}
.chat-profile-card:hover .indicator {
  background-color: #c21e39a4;
}
.indicator-active {
  background-color: #c21e39;
}
.body {
  display: flex;
  padding: 0.8rem 0;
}
.avatar {
  border-radius: 20rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  max-width: 50px;
}
.name {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
}
.divider {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 0.5px;
  width: 100%;
}
</style>