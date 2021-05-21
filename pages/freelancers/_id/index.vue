<template>
  <div class="freelancer">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="about-user card-shadow">
        <div class="details-div1">
          <img :src="getUser.profilePicture" alt="" class="avatar" />
          <div class="details">
            <h2 class="name">{{ getUser.name }}</h2>
            <p class="title">{{ getUser.title }}</p>
            <p class="rating">{{ getUser.rating }} / 10</p>
            <button class="btn primary-btn btn-shadow connect-btn">
              Connect
            </button>
          </div>
        </div>
        <div class="divider" />
        <div class="details-div2">
          <div class="grid-item">
            <p class="detail-heading">Location</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">
              {{ getUser.contact.location.city }},
              {{ getUser.contact.location.state }},
              {{ getUser.contact.location.country }}
            </p>
          </div>
          <div class="grid-item">
            <p class="detail-heading">Phone</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">{{ getUser.contact.phone }}</p>
          </div>
          <div class="grid-item">
            <p class="detail-heading">Email</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">{{ getUser.contact.email }}</p>
          </div>
          <div class="grid-item">
            <p class="detail-heading">Date Of Birth</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">{{ getUser.dateOfBirth }}</p>
          </div>
        </div>
      </div>
      <ProfileTabs />
    </div>
  </div>
</template>

<script>
import AppBar from "../../../components/AppBar";
import BackButton from "../../../components/BackButton";
import ProfileTabs from "../../../components/ProfileTabs";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppBar,
    BackButton,
    ProfileTabs,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
  created() {
    this.fetchUser(this.$route.params.id);
  },
};
</script>

<style scoped>
.freelancer {
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
.title {
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
}
.connect-btn {
  margin-top: 0.5rem;
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