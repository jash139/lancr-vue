<template>
  <div class="root">
    <AppBar />
    <div class="projects-card card-shadow">
      <div class="header">
        <h2 class="title">Project Title</h2>
        <div class="actions">
          <button class="apply-btn btn primary-btn btn-shadow">Apply</button>
          <button class="client-btn btn outlined-btn">Doggo Gang</button>
        </div>
      </div>
      <div class="card-section">
        <div class="heading-div">
          <h4 class="heading">Contact</h4>
          <div class="stroke" />
        </div>
        <div class="section-content">
          <div class="grid-item">
            <p class="detail-heading">Phone</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">094 561 2378</p>
          </div>
          <div class="grid-item">
            <p class="detail-heading">Email</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">freelancer@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="card-section">
        <div class="heading-div">
          <h4 class="heading">Details</h4>
          <div class="stroke" />
        </div>
      </div>
      <div class="card-section">
        <div class="heading-div">
          <h4 class="heading">Description</h4>
          <div class="stroke" />
        </div>
        <p class="detail-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod magna aliqua.
        </p>
      </div>
      <div class="card-section">
        <div class="heading-div">
          <h4 class="heading">Requirements</h4>
          <div class="stroke" />
        </div>
        <Chip text="React" />
        <Chip text="Vue" />
        <Chip text="Redux" />
        <Chip text="Vuex" />
        <Chip text="Nuxtjs" />
        <Chip text="Nextjs" />
        <Chip text="scss" />
        <Chip text="Git" />
        <Chip text="+4" />
      </div>
      <div class="card-section">
        <div class="heading-div">
          <h4 class="heading">Applicants</h4>
          <div class="stroke" />
        </div>
        <div class="applicant-card">Applicant card</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../../components/AppBar";
import Chip from "../../../components/Chip";

export default {
  components: {
    AppBar,
    Chip,
  },
};
</script>

<style scoped>
.projects-card {
  background-color: #ffffff;
  border-radius: 3px;
  margin: auto;
  max-width: 900px;
  padding: 2rem;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  color: #c21e39;
  font-size: 1.5rem;
  margin: 0.5rem 0;
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
.detail-info {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 1rem 0;
}
</style>