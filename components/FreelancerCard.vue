<template>
  <div class="freelancer-card">
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
      <div class="contact">
        <p class="phone">012 345 6789</p>
      </div>
      <div class="contact">
        <p class="email">freelancer@gmail.com</p>
      </div>
    </div>
    <div class="skills">
      <div class="skills-chip">React</div>
      <div class="skills-chip">Vue</div>
      <div class="skills-chip">+4</div>
    </div>
    <button class="view-btn">View Profile</button>
  </div>
</template>

<script>
export default {
  name: "FreelancerCard",
};
</script>

<style scoped>
</style>