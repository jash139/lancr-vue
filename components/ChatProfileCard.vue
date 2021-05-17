<template>
  <div class="chat-profile-card">
    <div class="body">
      <img
        src="https://images.unsplash.com/photo-1563497425252-36b755215241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="Avatar"
        class="avatar"
      />
      <div class="details">
        <h2 class="name">Doggo Gang</h2>
        <div class="role">Underworld don</div>
      </div>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
export default {
  name: "ChatProfileCard",
};
</script>

<style scoped>
.chat-profile-card {
  cursor: pointer;
}
.body {
  display: flex;
  padding: 1rem 0;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 1rem;
}
.avatar {
  border-radius: 20rem;
  max-width: 50px;
}
.name {
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
  padding: 0.2rem 1rem;
}
.divider {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 0.5px;
  width: 100%;
}
</style>