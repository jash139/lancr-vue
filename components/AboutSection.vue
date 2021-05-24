<template>
  <div class="about-section" id="about">
    <div class="pink-div" />
    <div class="content">
      <div class="boy-svg">
        <BoySvg />
      </div>
      <div class="about-errands">
        <h1 class="heading">What is Lancr?</h1>
        <div class="shift-right">
          <div class="pink-stroke" />
          <div>
            <p class="about">{{ about.para1 }}</p>
            <p class="about">{{ about.para2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoySvg from "./BoySvg";
import homeContent from "../assets/homeContent";

export default {
  name: "AboutSection",
  data() {
    return {
      about: {
        para1: "",
        para2: "",
      },
    };
  },
  components: {
    BoySvg,
  },
  created() {
    this.about.para1 = homeContent.about.para1;
    this.about.para2 = homeContent.about.para2;
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
@media only screen and (max-width: 960px) {
  .content {
    margin: auto;
  }
  .pink-div {
    display: none;
  }
  .boy-svg {
    display: none;
  }
}
</style>