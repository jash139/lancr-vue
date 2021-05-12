<template>
  <header class="header">
    <nav class="nav">
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
      <!-- <div class="logo" onClick={() => scrollToTop()}>
                    <Logo />
                </div> -->
      <div class="right-section">
        <v-btn elevation="0" class="sign-btn">Signin</v-btn>
        <v-btn elevation="0" class="sign-btn"> Signup </v-btn>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HomeNavBar",
};
</script>

<style scoped>
.header {
  background: transparent;
  backdrop-filter: blur(0.5rem);
  position: sticky;
  top: 0;
  z-index: 5;
}
.sign-btn {
  border-radius: 3px;
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
  /* [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    } */
}

.links {
  display: block;
  color: #050303;
  cursor: pointer;
  /* font-family: ; */
  font-size: 12px;
  font-weight: 600;
  margin-right: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
}

.right-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>