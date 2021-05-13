<template>
  <header class="header">
    <nav class="nav">
      <Logo />
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
  name: "AppBar",
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
.right-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>