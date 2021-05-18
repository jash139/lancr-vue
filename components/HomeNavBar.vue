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
          <NuxtLink to="/signin">
            <p class="sidebar-link">Signin</p>
          </NuxtLink>
          <NuxtLink to="/signup">
            <p class="sidebar-link">Signup</p>
          </NuxtLink>
          <NuxtLink to="/">
            <p class="sidebar-link">Signout</p>
          </NuxtLink>
        </b-sidebar>
        <b-button
          @click="sidebarOpen = true"
          icon-right="menu"
          class="sidebar-btn"
        />
        <Logo />
      </div>
      <ul class="ul">
        <li class="homelink">
          <p datapage="home" class="links" @click="scrollToTop">Home</p>
        </li>
        <li>
          <p datapage="skills" class="links" @click="scrollToSection('about')">
            About
          </p>
        </li>
        <li>
          <p
            datapage="projects"
            class="links"
            @click="scrollToSection('features')"
          >
            Features
          </p>
        </li>
        <li>
          <p
            datapage="contact"
            class="links"
            @click="scrollToSection('contact')"
          >
            Contact
          </p>
        </li>
        <div class="navbar-bubble" />
      </ul>
      <div class="right-section">
        <NuxtLink to="/signin">
          <button class="btn outlined-btn">Signin</button>
        </NuxtLink>
        <NuxtLink to="/signup">
          <button class="btn secondary-btn signup-btn">Signup</button>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "./Logo";
import { scrollToTop, scrollToSection } from "../static/methods";

export default {
  name: "HomeNavBar",
  data() {
    return {
      sidebarOpen: false,
    };
  },
  components: {
    Logo,
  },
  methods: {
    scrollToTop: () => scrollToTop(),
    scrollToSection: (id) => scrollToSection(id),
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
.signup-btn {
  margin-left: 1rem;
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
.ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.links {
  display: block;
  color: #050303;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  margin-left: 1.5rem;
  text-decoration: none;
}
.right-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media only screen and (max-width: 960px) {
  .ul {
    display: none;
  }
  .sidebar-btn {
    display: block;
  }
  .signup-btn {
    display: none;
  }
}
</style>