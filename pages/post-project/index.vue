<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="projects-card card-shadow">
        <div class="header">
          <h2 class="title">By Robert</h2>
          <div class="actions">
            <button class="apply-btn btn primary-btn btn-shadow">Post</button>
            <button class="client-btn btn outlined-btn">Cancel</button>
          </div>
        </div>
        <div class="card-section">
          <h3>Project Title</h3>
        </div>
        <div class="card-section">
          <div class="section-content">
            <div class="grid-item">
              <p class="detail-heading">Status</p>
            </div>
            <div class="grid-item">
              <p class="detail-info">Active</p>
            </div>
          </div>
        </div>

        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Details</h4>
            <div class="stroke" />
          </div>
          <div class="section-content">
            <div class="grid-item">
              <p class="detail-heading">Posted on</p>
            </div>
            <div class="grid-item">
              <p class="detail-info">13-13-2001</p>
            </div>
            <div class="grid-item">
              <p class="detail-heading">Start Date</p>
            </div>
            <div class="grid-item">
              <p class="detail-info">13-13-2001</p>
            </div>
            <div class="grid-item">
              <p class="detail-heading">End Date</p>
            </div>
            <div class="grid-item">
              <p class="detail-info">13-13-2001</p>
            </div>
            <div class="grid-item">
              <p class="detail-heading">Amount</p>
            </div>
            <div class="grid-item">
              <p class="detail-info">$100 - 200</p>
            </div>
          </div>
        </div>
        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Description</h4>
            <div class="stroke" />
          </div>
          <p class="detail-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Requirements</h4>
            <div class="stroke" />
          </div>
          <Chip text="requ" />
          <Chip text="irem" />
          <Chip text="ents" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import BackButton from "../../components/BackButton";

export default {
  components: {
    AppBar,
    BackButton,
  },
};
</script>

<style scoped>
.root {
  min-height: 100vh;
  padding-bottom: 1.5rem;
}
.content {
  max-width: 95%;
  margin: auto;
}
.projects-card {
  background-color: #ffffff;
  border-radius: 3px;
  margin: auto;
  margin-top: 2rem;
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
.apply-btn {
  margin-right: 1rem;
  width: 7rem;
}
.client-btn {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 7rem;
}
.card-section {
  margin: 2rem 0;
}
.section-content {
  display: grid;
  grid-template-columns: auto auto;
}
.grid-item {
  margin: 0.3rem 0;
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
}
.applicants {
  max-height: 500px;
  overflow-y: auto;
}
.applicants::-webkit-scrollbar {
  width: 1.5rem;
}
.applicants::-webkit-scrollbar-thumb {
  background-color: #e5ecee;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
@media only screen and (max-width: 960px) {
  .projects-card {
    padding: 1rem;
  }
  .header {
    flex-direction: column;
  }
  .actions {
    margin: 1rem 0;
  }
}
</style>