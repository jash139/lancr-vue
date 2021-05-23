<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <b-sidebar
          :fullheight="true"
          :fullwidth="false"
          :overlay="false"
          :right="false"
          v-model="sidebarOpen"
        >
          <SidebarNavContent />
        </b-sidebar>
        <b-button
          @click="sidebarOpen = true"
          icon-right="menu"
          class="sidebar-btn"
        />
        <Logo />
      </div>
      <div v-if="isSignedIn" class="right-section">
        <NuxtLink to="/profile">
          <button class="profile-btn">
            {{ getCurrentUser.name.charAt(0).toUpperCase() }}
          </button>
        </NuxtLink>
      </div>
      <div v-else class="right-section">
        <button class="btn outlined-btn logout-btn">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
import SidebarNavContent from "./SidebarNavContent";
import Logo from "./Logo";
import { mapGetters } from "vuex";

export default {
  name: "AppBar",
  data() {
    return {
      sidebarOpen: false,
    };
  },
  computed: {
    ...mapGetters(["isSignedIn", "getCurrentUser"]),
  },
  components: {
    SidebarNavContent,
    Logo,
  },
};
</script>

<style scoped>
.header {
  background: transparent;
  border-bottom: 2px solid #ffffff;
  backdrop-filter: blur(0.5rem);
  position: sticky;
  top: 0;
  z-index: 5;
}
.logo {
  display: flex;
  align-items: center;
}
.sidebar-btn {
  background-color: transparent;
  border: 1px solid #5d5755;
  color: #5d5755;
  border-radius: 5rem;
  display: none;
  margin-right: 1rem;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  min-height: 10vh;
  width: 95%;
  position: relative;
}
.right-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.profile-btn {
  background-color: #c21e39;
  border-radius: 5rem;
  color: #ffffff;
  margin: 0.2rem 0;
  height: 40px;
  width: 40px;
}
@media only screen and (max-width: 960px) {
  .sidebar-btn {
    display: block;
  }
}
</style>