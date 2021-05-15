<template>
  <div class="freelancer-card card-shadow">
    <div class="card-header">
      <img
        src="https://images.unsplash.com/photo-1563497425252-36b755215241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="Avatar"
        class="avatar"
      />
      <div class="main-details">
        <h2 class="name">Doggo Gang</h2>
        <p class="location">New York, NY</p>
        <div class="role">Underworld don</div>
      </div>
    </div>
    <div class="card-body">
      <div class="heading-div">
        <h4 class="heading">Contact</h4>
        <div class="stroke" />
      </div>
      <div class="contacts">
        <p>O</p>
        <p class="contact-info">012 345 6789</p>
        <p>O</p>
        <p class="contact-info">freelancer@gmail.com</p>
      </div>
    </div>
    <div class="card-body">
      <div class="heading-div">
        <h4 class="heading">Skills</h4>
        <div class="stroke" />
      </div>
      <Chip text="React" />
      <Chip text="Vue" />
      <Chip text="+4" />
    </div>
    <button class="view-btn btn primary-btn btn-shadow">View Profile</button>
  </div>
</template>

<script>
import Chip from "./Chip";

export default {
  name: "FreelancerCard",
  components: {
    Chip,
  },
};
</script>

<style scoped>
.freelancer-card {
  background-color: #ffffff;
  border-radius: 3px;
  max-width: 380px;
  min-width: 300px;
  margin: auto;
  padding: 1.5rem;
}
.card-header {
  display: flex;
}
.avatar {
  border-radius: 20rem;
  max-width: 90px;
}
.name {
  color: #c21e39;
  font-size: 1.5rem;
}
.location {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
}
.role {
  background-color: #c21e39;
  border-radius: 5rem;
  color: #ffffff;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 1.2rem;
}
.main-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 1rem;
}
.card-body {
  margin: 2rem 0;
}
.heading-div {
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
}
.heading {
  color: #cdcdcd;
  font-size: 0.9rem;
  font-weight: 500;
}
.stroke {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 0.5px;
  margin-left: 1rem;
  width: 100%;
}
.contacts {
  display: grid;
  grid-template-columns: 15% auto;
}
.contact-info {
  color: #939498;
  font-size: 0.9rem;
  font-weight: 500;
}
.view-btn {
  width: 100%;
}
.skills-chip {
  display: inline-block;
}
</style>