<template>
  <div class="profile">
    <AppBar />
    <div class="content">
      <p class="back-btn" @click="goBack">
        <svg
          width="12"
          height="12"
          viewBox="0 0 17 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3052 0.489163C13.6592 0.174075 14.1167 0 14.5906 0V0C16.3461 0 17.1932 2.15073 15.9092 3.34782L6.62903 12L15.9092 20.6522C17.1932 21.8493 16.3461 24 14.5906 24V24C14.1167 24 13.6592 23.8259 13.3052 23.5108L1.21036 12.747C0.763435 12.3493 0.763436 11.6507 1.21036 11.253L13.3052 0.489163Z"
            fill="#5D5755"
          />
        </svg>
        Back
      </p>
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
import ProfileTabs from "../../components/ProfileTabs";

export default {
  components: {
    AppBar,
    ProfileTabs,
  },
  methods: {
    goBack: () => console.log("go back"),
  },
};
</script>

<style scoped>
.profile {
  background-color: #f2e9e6;
  min-height: 100vh;
  padding-bottom: 1.5rem;
}
.content {
  max-width: 95%;
  margin: auto;
}
.back-btn {
  color: #5d5755;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem 0 0;
}
.about-user {
  background-color: #ffffff;
  box-shadow: 0 10px 6px rgba(0, 0, 0, 0.05);
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