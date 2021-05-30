<template>
  <b-dropdown position="is-bottom-left">
    <template #trigger>
      <img
        v-if="getCurrentUser !== null && getCurrentUser.profilePicture !== ''"
        class="profile-btn-avatar"
        :src="getCurrentUser.profilePicture"
        :alt="getCurrentUser.name.charAt(0).toUpperCase()"
      />
      <button
        v-if="getCurrentUser !== null && getCurrentUser.profilePicture === ''"
        class="profile-btn"
      >
        {{ getCurrentUser.name.charAt(0).toUpperCase() }}
      </button>
      <button v-if="getCurrentUser === null" class="profile-btn"></button>
    </template>
    <NuxtLink to="/profile">
      <b-dropdown-item
        ><b-icon icon="account" class="dropdown-icon"></b-icon>
        Profile</b-dropdown-item
      >
    </NuxtLink>

    <b-dropdown-item @click="signOut"
      ><b-icon icon="logout" class="dropdown-icon"></b-icon>
      Signout
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileButton",
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    ...mapActions(["signOut"]),
  },
};
</script>

<style scoped>
.profile-btn {
  background-color: #c21e39;
  border-radius: 5rem;
  color: #ffffff;
  font-weight: 500;
  margin: 0.2rem 0;
  height: 40px;
  width: 40px;
}
.profile-btn-avatar {
  border-radius: 10rem;
  margin: 0.2rem 0;
  object-fit: cover;
  height: 40px;
  widows: 40px;
}
.dropdown-icon {
  margin-right: 0.5rem;
}
</style>