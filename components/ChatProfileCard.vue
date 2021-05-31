<template>
  <div class="chat-profile-card" @click="handleClick">
    <div class="body">
      <div :class="[isIndicatorActive(getActiveChatUser.user.uid)]" />
      <div v-if="user.profilePicture === ''" class="default-avatar">
        {{ user.name.charAt(0).toUpperCase() }}
      </div>
      <img v-else :src="user.profilePicture" :alt="user.name" class="avatar" />
      <h2 class="name">{{ user.name }}</h2>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ChatProfileCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getActiveChatUser"]),
  },
  methods: {
    ...mapActions(["fetchActiveChatUser"]),
    isIndicatorActive(uid) {
      if (uid === this.user.uid) {
        return "indicator indicator-active";
      } else {
        return "indicator";
      }
    },
    handleClick() {
      this.fetchActiveChatUser(this.user.uid);
    },
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
  height: 50px;
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
  align-items: center;
  padding: 0.8rem 0;
}
.default-avatar {
  background-color: #f2e9e6;
  border-radius: 20rem;
  color: #c21e39;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  margin-right: 1rem;
  height: 50px;
  width: 50px;
}
.avatar {
  border-radius: 20rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  object-fit: cover;
  height: 50px;
  width: 50px;
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