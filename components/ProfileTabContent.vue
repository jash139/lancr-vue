<template>
  <div class="tab-card">
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Experience</h4>
        <div class="stroke" />
      </div>
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Skills</h4>
        <div class="stroke" />
      </div>
      <Chip text="React" />
      <Chip text="Redux" />
      <Chip text="Vue" />
      <Chip text="Vuex" />
      <Chip text="Html" />
      <Chip text="Css" />
      <Chip text="Javascript" />
      <Chip text="React" />
      <Chip text="Redux" />
      <Chip text="Vue" />
      <Chip text="Vuex" />
      <Chip text="Html" />
      <Chip text="Css" />
      <Chip text="Javascript" />
    </div>
  </div>
</template>

<script>
import Chip from "./Chip";

export default {
  name: "ProfileTabContent",
  components: {
    Chip,
  },
};
</script>

<style scoped>
.tab-card {
  margin: auto;
  max-width: 900px;
  padding: 2rem;
}
.card-section {
  margin: 2rem 0;
}
.heading-div {
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
}
.heading {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 700;
}
.stroke {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 0.5px;
  margin-left: 1rem;
  width: 100%;
}
</style>