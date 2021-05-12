<template>
  <div class="home">
    <HomeNavBar />
    <div class="hero-section">
      <div class="cta-section">
        <h1 class="main-heading">DESCRIBE YOUR APP IN BOLD LETTERS</h1>
        <h2 class="sub-heading">
          Browse projects or hire a freelancer according to your location and
          skills.
        </h2>
        <v-btn medium class="projects-btn">Projects</v-btn>
        <v-btn medium class="freelancers-btn">Freelancers</v-btn>
      </div>
      <div class="work-svg">
        <WorkSvg />
      </div>
    </div>
    <ContactsFooter />
  </div>
</template>

<script>
import WorkSvg from "../components/WorkSvg";
import ContactsFooter from "../components/ContactsFooter";
import HomeNavBar from "../components/HomeNavBar";

export default {
  components: {
    WorkSvg,
    ContactsFooter,
    HomeNavBar,
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
}
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  max-width: 95%;
}
@media only screen and (max-width: 960px) {
  .hero-section {
    flex-direction: column-reverse;
    text-align: center;
  }
}
</style>