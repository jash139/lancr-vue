<template>
  <b-dropdown position="is-bottom-left">
    <template #trigger>
      <button class="profile-btn">
        {{
          getCurrentUser !== null
            ? getCurrentUser.name.charAt(0).toUpperCase()
            : ""
        }}
      </button>
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
.dropdown-icon {
  margin-right: 0.5rem;
}
</style>