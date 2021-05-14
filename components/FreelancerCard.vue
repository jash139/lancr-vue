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
        <div class="role-chip">
          <p class="role">Underworld don</p>
        </div>
      </div>
    </div>
    <div class="contact-details">
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
    <div class="skills">
      <div class="heading-div">
        <h4 class="heading">Skills</h4>
        <div class="stroke" />
      </div>
      <div class="skills-chip">React</div>
      <div class="skills-chip">Vue</div>
      <div class="skills-chip">+4</div>
    </div>
    <button class="view-btn btn primary-btn btn-shadow">View Profile</button>
  </div>
</template>

<script>
export default {
  name: "FreelancerCard",
};
</script>

<style scoped>
.freelancer-card {
  background-color: #ffffff;
  border-radius: 3px;
  max-width: 350px;
  padding: 1.5rem;
}
.card-header {
  display: flex;
  align-items: center;
}
.avatar {
  border-radius: 20rem;
  max-width: 90px;
}
.main-details {
  margin-left: 1rem;
}
.heading-div {
  display: flex;
  align-items: center;
}
.heading {
  color: #8b8287;
  font-size: 0.8rem;
  font-weight: 600;
}
.stroke {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 1px;
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