<template>
  <div class="home">
    <HomeNavBar />
    <div class="hero-section">
      <div class="cta-section">
        <h1 class="main-heading">DESCRIBE YOUR APP <br />IN BOLD LETTERS</h1>
        <div class="shift-right">
          <div class="white-stroke" />
          <div>
            <p class="sub-heading">
              Browse projects or hire a freelancer<br />
              according to your location and<br />
              skills.
            </p>
            <div class="cta-btns">
              <div class="dots">
                <LightDotsSvg />
              </div>
              <v-btn medium class="projects-btn">Projects</v-btn>
              <v-btn medium class="freelancers-btn">Freelancers</v-btn>
            </div>
          </div>
        </div>
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
import LightDotsSvg from "../components/LightDotsSvg";

export default {
  components: {
    WorkSvg,
    ContactsFooter,
    HomeNavBar,
    LightDotsSvg,
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
  justify-content: space-around;
  margin: auto;
  max-width: 95%;
}
.main-heading {
  color: #050303;
  margin: 1.5rem 0;
  text-transform: uppercase;
}
.shift-right {
  display: flex;
}
.white-stroke {
  background-color: #c21e39;
  border-radius: 5rem;
  height: 0.2rem;
  margin: 0.5rem 1rem 0 0;
  width: 2rem;
}
.sub-heading {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
}
.cta-btns {
  position: relative;
}
.dots {
  bottom: -35px;
  left: -35px;
  position: absolute;
}
@media only screen and (max-width: 960px) {
  .hero-section {
    flex-direction: column-reverse;
    text-align: center;
  }
}
</style>

<style>
body {
  font-family: "Raleway", sans-serif;
}
</style>