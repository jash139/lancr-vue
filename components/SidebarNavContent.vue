<template>
  <div>
    <Logo />
    <NuxtLink to="/profile">
      <p class="sidebar-link">
        <b-icon class="sidebar-icon" icon="account"></b-icon> My Profile
      </p>
    </NuxtLink>
    <NuxtLink to="/chats">
      <p class="sidebar-link">
        <b-icon class="sidebar-icon" icon="chat"></b-icon> Chats
      </p>
    </NuxtLink>
    <div class="divider" />
    <NuxtLink to="/projects">
      <p class="sidebar-link">Projects</p>
    </NuxtLink>
    <NuxtLink to="/freelancers">
      <p class="sidebar-link">Freelancers</p>
    </NuxtLink>
    <div class="divider" />
    <NuxtLink v-if="!isSignedIn" to="/signin">
      <p class="sidebar-link">Signin</p>
    </NuxtLink>
    <NuxtLink v-if="!isSignedIn" to="/signup">
      <p class="sidebar-link">Signup</p>
    </NuxtLink>
    <p v-if="isSignedIn" class="sidebar-link" @click="signOut">Signout</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SidebarNavContent",
  computed: {
    ...mapGetters(["isSignedIn"]),
  },
  methods: {
    ...mapActions(["signOut"]),
  },
};
</script>

<style scoped>
.divider {
  background-color: #f2e9e6;
  height: 1px;
  margin: 0.5rem 0;
  width: 100%;
}
.sidebar-link {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.6rem 0 0.6rem 0.5rem;
  text-decoration: none;
}
.sidebar-icon {
  margin-right: 0.5rem;
}
</style>