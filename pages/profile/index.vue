<template>
  <div class="profile">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="about-user card-shadow">
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
        <div class="details-div2">
          <div class="grid-item">
            <p class="detail-heading">Location</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">Banashankari, Karnataka, India</p>
          </div>
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
          <div class="grid-item">
            <p class="detail-heading">Gender</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">Male</p>
          </div>
        </div>
      </div>
      <ProfileTabs />
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import BackButton from "../../components/BackButton";
import ProfileTabs from "../../components/ProfileTabs";

export default {
  components: {
    AppBar,
    BackButton,
    ProfileTabs,
  },
};
</script>

<style scoped>
.profile {
  min-height: 100vh;
  padding-bottom: 1.5rem;
}
.content {
  max-width: 95%;
  margin: auto;
}
.about-user {
  background-color: #ffffff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 2rem;
}
.details-div1 {
  display: flex;
  align-items: center;
  width: 40%;
}
.details {
  margin: 0 1rem;
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
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem 0 1rem;
}
.edit-btn {
}
.divider {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 10rem;
  width: 2px;
}
.details-div2 {
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 1.5rem;
}
.grid-item {
  margin: 0.5rem 2rem 0.5rem 0;
}
.detail-heading {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
}
.detail-info {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 400;
}
@media only screen and (max-width: 1280px) {
  .details-div1 {
    width: 50%;
  }
}
@media only screen and (max-width: 960px) {
  .divider {
    display: none;
  }
  .details-div1 {
    flex-direction: column;
    width: unset;
  }
  .details {
    text-align: center;
  }
  .avatar {
    margin: 1rem 0;
  }
  .about-user {
    flex-direction: column;
  }
  .details-div2 {
    margin: 2rem 0 0;
  }
}
</style>