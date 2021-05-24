<template>
  <div class="profile">
    <ChatButton />
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="about-user card-shadow">
        <div class="details-div1">
          <div v-if="user.profilePicture === ''" class="default-avatar">
            {{ user.name.charAt(0).toUpperCase() }}
          </div>
          <img v-else :src="user.profilePicture" alt="" class="avatar" />
          <div class="details">
            <h2 class="name">{{ user.name }}</h2>
            <p class="title">{{ user.title }}</p>
            <p class="rating">{{ user.rating }} / 10</p>
            <ProfileEditButton />
          </div>
        </div>
        <div class="divider" />
        <div class="details-div2">
          <div class="grid-item">
            <p class="detail-heading">Location</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">
              {{ user.contact.location.city }},
              {{ user.contact.location.state }},
              {{ user.contact.location.country }}
            </p>
          </div>
          <div class="grid-item">
            <p class="detail-heading">Phone</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">{{ user.contact.phone }}</p>
          </div>
          <div class="grid-item">
            <p class="detail-heading">Email</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">{{ user.contact.email }}</p>
          </div>
          <div class="grid-item">
            <p class="detail-heading">Date Of Birth</p>
          </div>
          <div class="grid-item">
            <p class="detail-info">{{ user.dateOfBirth }}</p>
          </div>
        </div>
      </div>
      <ProfileTabs />
    </div>
  </div>
</template>

<script>
import ChatButton from "../../components/ChatButton";
import AppBar from "../../components/AppBar";
import BackButton from "../../components/BackButton";
import ProfileEditButton from "../../components/ProfileEditButton";
import ProfileTabs from "../../components/ProfileTabs";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "getCurrentUser",
    }),
  },
  components: {
    ChatButton,
    AppBar,
    BackButton,
    ProfileEditButton,
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
.default-avatar {
  background-color: #f2e9e6;
  border-radius: 20rem;
  color: #c21e39;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  min-height: 140px;
  min-width: 140px;
  max-width: 140px;
}
.avatar {
  border-radius: 20rem;
  margin: 0 1rem;
  min-width: 140px;
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
.edit-btn {
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