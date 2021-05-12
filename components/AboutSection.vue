<template>
  <div class="about-section">
    <div class="pink-div" />
    <div class="content">
      <BoySvg />
      <div class="about-errands">
        <h1 class="heading">What is Errands?</h1>
        <div class="shift-right">
          <div class="pink-stroke" />
          <div>
            <p class="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoySvg from "./BoySvg";

export default {
  name: "AboutSection",
  components: {
    BoySvg,
  },
};
</script>

<style scoped>
.about-section {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 95%;
}
.pink-div {
  background-color: #c21e39;
  height: 250px;
  width: 500px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.about-errands {
  max-width: 600px;
}
.heading {
  color: #050303;
  margin: 1rem 0;
  text-transform: uppercase;
}
.shift-right {
  display: flex;
}
.pink-stroke {
  background-color: #c21e39;
  border-radius: 5rem;
  height: 0.2rem;
  margin: 1.5rem 1rem 0 0;
  min-width: 2rem;
}
.about {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem 0;
}
</style>