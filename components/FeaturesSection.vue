<template>
  <div class="features-section" id="features">
    <div class="content">
      <div class="dots-svg">
        <DarkDotsSvg />
      </div>
      <h1 class="heading">What makes us special?</h1>
      <div class="features">
        <div class="feature-card">
          <p class="number-indicator">01</p>
          <p class="feature">Find services or jobs near you</p>
        </div>
        <div class="feature-card">
          <p class="number-indicator">02</p>
          <p class="feature">Browse projects according to your skillset</p>
        </div>
        <div class="feature-card">
          <p class="number-indicator">03</p>
          <p class="feature">One platform to earn or hire</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DarkDotsSvg from "./DarkDotsSvg";

export default {
  name: "FeaturesSection",
  components: {
    DarkDotsSvg,
  },
};
</script>

<style scoped>
.features-section {
  background-color: #f2e9e6;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem 0;
}
.content {
  position: relative;
  z-index: 1;
}
.dots-svg {
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
}
.heading {
  color: #050303;
  margin: 1rem 0 3rem 0;
  text-transform: uppercase;
  text-align: center;
}
.features {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  max-width: 1000px;
}
.feature-card {
  background-color: #ffffff;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  color: #5d5755;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 700;
  height: 220px;
  margin: 2rem 1rem;
  padding: 1.5rem;
  width: 250px;
  transition: all 0.3s ease;
}
.feature-card:hover {
  background-color: #c21e39;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #ffffff;
}
@media only screen and (max-width: 960px) {
  .features {
    flex-direction: column;
  }
}
</style>