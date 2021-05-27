<template>
  <div class="freelancer-card card-shadow">
    <div class="freelancer-card-header">
      <div v-if="freelancer.profilePicture === ''" class="default-avatar">
        {{ freelancer.name.charAt(0).toUpperCase() }}
      </div>
      <img v-else :src="freelancer.profilePicture" alt="" class="avatar" />
      <div class="main-details">
        <h2 class="name">{{ freelancer.name }}</h2>
        <p class="location">
          {{
            freelancer.contact.location.city +
            ", " +
            freelancer.contact.location.state
          }}
        </p>
        <div class="title">{{ freelancer.title }}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="heading-div">
        <h4 class="heading">Contact</h4>
        <div class="stroke" />
      </div>
      <div class="contacts">
        <b-icon icon="phone" size="is-small" class="contact-info"></b-icon>
        <p class="contact-info">{{ freelancer.contact.phone }}</p>
        <b-icon icon="email" size="is-small" class="contact-info"></b-icon>
        <p class="contact-info">{{ freelancer.contact.email }}</p>
      </div>
    </div>
    <div class="card-body">
      <div class="heading-div">
        <h4 class="heading">Skills</h4>
        <div class="stroke" />
      </div>
      <Chip v-for="skill in skills" :key="skill" :text="skill" />
    </div>
    <NuxtLink :to="'/freelancers/' + freelancer.uid">
      <button class="view-btn btn primary-btn btn-shadow">View Profile</button>
    </NuxtLink>
  </div>
</template>

<script>
import Chip from "./Chip";

export default {
  name: "FreelancerCard",
  props: {
    freelancer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      skills: [],
    };
  },
  components: {
    Chip,
  },
  methods: {
    setSkills(allSkills) {
      if (allSkills.length > 1) {
        this.skills = allSkills.slice(0, 1);
        this.skills.push("+" + (allSkills.length - 1).toString());
      } else {
        this.skills = allSkills;
      }
    },
  },
  created() {
    this.setSkills(this.freelancer.skills);
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
.freelancer-card-header {
  display: flex;
}
.default-avatar {
  background-color: #f2e9e6;
  border-radius: 20rem;
  color: #c21e39;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  max-width: 90px;
}
.avatar {
  border-radius: 20rem;
  min-width: 90px;
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
.title {
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