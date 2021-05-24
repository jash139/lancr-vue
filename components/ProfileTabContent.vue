<template>
  <div class="tab-card">
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Experience</h4>
        <div class="stroke" />
      </div>
      <div class="exp">
        <div
          v-for="experience in user.experience"
          :key="experience.start"
          class="experience"
        >
          <div>
            <h3 class="org">{{ experience.organization }}</h3>
            <p class="role">{{ experience.role }}</p>
          </div>
          <p class="duration">{{ experience.start }} - {{ experience.end }}</p>
        </div>
      </div>
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Skills</h4>
        <div class="stroke" />
      </div>
      <Chip v-for="skill in user.skills" :key="skill" :text="skill" />
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">About</h4>
        <div class="stroke" />
      </div>
      <p class="details-info">{{ user.about }}</p>
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Languages</h4>
        <div class="stroke" />
      </div>
      <div v-for="language in user.languages" :key="language" class="language">
        {{ language }}
        <div class="divider" />
      </div>
    </div>
  </div>
</template>

<script>
import Chip from "./Chip";
import { mapGetters } from "vuex";

export default {
  name: "ProfileTabContent",
  computed: {
    ...mapGetters({
      user: "getCurrentUser",
    }),
  },
  components: {
    Chip,
  },
};
</script>

<style scoped>
.tab-card {
  margin: auto;
  max-width: 900px;
  padding: 2rem;
}
.card-section {
  margin: 2rem 0;
}
.heading-div {
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
}
.heading {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 700;
}
.stroke {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 0.5px;
  margin-left: 1rem;
  width: 100%;
}
.experience {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1.5rem 0;
}
.org {
  color: #5d5755;
  font-size: 1.4rem;
}
.role {
  color: #5d5755;
  font-size: 1rem;
  font-style: italic;
  font-weight: 500;
}
.duration {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 500;
}
.exp {
  max-height: 350px;
  overflow-y: auto;
}
.exp::-webkit-scrollbar {
  width: 1.5rem;
}
.exp::-webkit-scrollbar-thumb {
  background-color: #e5ecee;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
.details-info {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
}
.language {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}
.divider {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 1.5rem;
  margin: 0 1.5rem;
  width: 0.5px;
}
</style>