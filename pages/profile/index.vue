<template>
  <div class="profile">
    <AppBar />
    <div class="content">
      <p class="back-button">Back</p>
      <div class="about-user">
        <div class="details-div1">
          <img
            src="https://images.unsplash.com/photo-1562347851-32d44aa232ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
            class="avatar"
          />
          <div class="details">
            <h2 class="name">Doggo Gang</h2>
            <p class="role">Mafia Leader</p>
            <p class="rating">8.2 / 10</p>
            <button class="btn primary-btn btn-shadow edit-btn">
              Edit Details
            </button>
          </div>
        </div>
        <div class="divider" />
        <div class="details-div2">;sdsanf</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";

export default {
  components: {
    AppBar,
  },
};
</script>

<style scoped>
.profile {
  background-color: #f2e9e6;
  min-height: 100vh;
}
.content {
  max-width: 95%;
  margin: auto;
}
.about-user {
  background-color: #ffffff;
  box-shadow: 0 10px 6px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  color: #5d5755;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  height: 220px;
  margin: 1rem 0;
  padding: 2rem;
}
.details-div1 {
  display: flex;
  align-items: center;
  width: 40%;
}
.avatar {
  border-radius: 20rem;
  margin: 0 1rem;
  max-width: 140px;
}
.name {
  color: #c21e39;
  font-size: 1.6rem;
}
.role {
  color: #5d5755;
  font-size: 1rem;
  font-style: italic;
  font-weight: 700;
  margin-top: 0.5rem;
}
.rating {
  margin: 0.5rem 0 1rem;
}
.edit-btn {
}
.divider {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 100%;
  width: 2px;
}
.details-div2 {
}
</style>