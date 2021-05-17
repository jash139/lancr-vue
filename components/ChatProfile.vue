<template>
  <div class="chat-profile">
    <div class="profile-details">
      <img
        src="https://images.unsplash.com/photo-1563497425252-36b755215241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="Avatar"
        class="avatar"
      />
      <h2 class="name">Doggo Gang</h2>
      <p class="location">New York, NY</p>
      <div class="role">Underworld don</div>
    </div>
    <button class="view-btn btn primary-btn btn-shadow">View Profile</button>
  </div>
</template>

<script>
export default {
  name: "ChatProfile",
};
</script>

<style scoped>
.chat-profile {
  border-left: 2px solid #f2e9e6;
  padding: 1rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.profile-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  border-radius: 20rem;
  max-width: 140px;
}
.name {
  color: #c21e39;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
}
.location {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
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
.view-btn {
  width: 100%;
}
</style>