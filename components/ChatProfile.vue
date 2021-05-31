<template>
  <div v-if="activeUser.selected" class="chat-profile">
    <div class="profile-details">
      <div v-if="activeUser.user.profilePicture === ''" class="default-avatar">
        {{ activeUser.user.name.charAt(0).toUpperCase() }}
      </div>
      <img v-else :src="activeUser.user.profilePicture" alt="" class="avatar" />
      <h2 class="name">{{ activeUser.user.name }}</h2>
      <p class="location">
        {{ activeUser.user.contact.location.city }},
        {{ activeUser.user.contact.location.state }},
        {{ activeUser.user.contact.location.country }},
      </p>
      <div class="title">{{ activeUser.title }}</div>
    </div>
    <NuxtLink :to="'/freelancers/' + activeUser.user.uid">
      <button class="view-btn btn primary-btn btn-shadow">View Profile</button>
    </NuxtLink>
  </div>
  <div v-else class="chat-profile">
    <h1 class="select-profile">Select a profile</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChatProfile",
  computed: {
    ...mapGetters({
      activeUser: "getActiveChatUser",
    }),
  },
};
</script>

<style scoped>
.chat-profile {
  border-left: 2px solid #f2e9e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.profile-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.default-avatar {
  background-color: #f2e9e6;
  border-radius: 20rem;
  color: #c21e39;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  height: 140px;
  width: 140px;
}
.avatar {
  border-radius: 20rem;
  margin-bottom: 1rem;
  object-fit: cover;
  height: 140px;
  width: 140px;
}
.name {
  color: #c21e39;
  font-size: 1.5rem;
  font-weight: 600;
}
.location {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
}
.title {
  background-color: #c21e39;
  border-radius: 5rem;
  color: #ffffff;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 1.2rem;
}
.select-profile {
  color: #c21e39;
  font-size: 1.6rem;
  font-weight: 700;
  opacity: 0.5;
  text-align: center;
}
@media only screen and (max-width: 1000px) {
  .chat-profile {
    display: none;
  }
}
</style>