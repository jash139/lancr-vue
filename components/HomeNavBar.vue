<template>
  <header class="header">
    <nav class="nav">
      <Logo />
      <ul class="ul">
        <li class="homelink">
          <p datapage="home" class="links" onClick="scrollToSection('home')">
            Home
          </p>
        </li>
        <li>
          <p
            datapage="projects"
            class="links"
            onClick="scrollToSection('features')"
          >
            Features
          </p>
        </li>
        <li>
          <p datapage="skills" class="links" onClick="scrollToSection('about')">
            About
          </p>
        </li>
        <li>
          <p
            datapage="contact"
            class="links"
            onClick="scrollToSection('contact')"
          >
            Contact
          </p>
        </li>
        <div class="navbar-bubble" />
      </ul>
      <div class="right-section">
        <button elevation="0" class="btn outlined-btn sign-btn">Signin</button>
        <button elevation="0" class="btn secondary-btn sign-btn">Signup</button>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "HomeNavBar",
  components: {
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
.sign-btn {
  margin-left: 1.5rem;
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
}
</style>