<template>
  <div class="freelancer-tabs">
    <div class="tab">
      <button
        class="tablinks active"
        @click="changeTab($event, 'freelancer-tab-1')"
      >
        Profile
      </button>
      <button class="tablinks" @click="changeTab($event, 'freelancer-tab-2')">
        Projects
      </button>
      <button class="tablinks" @click="changeTab($event, 'freelancer-tab-3')">
        Connections
      </button>
    </div>

    <div id="freelancer-tab-1" class="tabcontent activetab">
      <div class="tab-card">
        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Experience</h4>
            <div class="stroke" />
          </div>
          <div class="exp">
            <div
              v-for="experience in getUser.experience"
              :key="experience.start"
              class="experience"
            >
              <div>
                <h3 class="org">{{ experience.organization }}</h3>
                <p class="role">{{ experience.role }}</p>
              </div>
              <p class="duration">
                {{ experience.start }} - {{ experience.end }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Skills</h4>
            <div class="stroke" />
          </div>
          <Chip v-for="skill in getUser.skills" :key="skill" :text="skill" />
        </div>
        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">About</h4>
            <div class="stroke" />
          </div>
          <p class="details-info">{{ getUser.about }}</p>
        </div>
        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Languages</h4>
            <div class="stroke" />
          </div>
          <div
            v-for="language in getUser.languages"
            :key="language"
            class="language"
          >
            {{ language }}
            <div class="divider" />
          </div>
        </div>
      </div>
    </div>

    <div id="freelancer-tab-2" class="tabcontent">
      <b-collapse
        v-for="project in getProjectsByUID(getUser.uid)"
        :key="project._id"
        animation="slide"
        :open="false"
      >
        <template #trigger="props">
          <div class="card-header" role="button">
            <p class="card-header-title">{{ project.title }}</p>
            <a class="card-header-icon">
              <b-icon
                :icon="props.open ? 'menu-up' : 'menu-down'"
                class="open-icon"
              >
              </b-icon>
            </a>
          </div>
        </template>

        <div class="card-content">
          <div class="content">
            {{ project.description }}
          </div>
        </div>
        <footer class="card-footer">
          <NuxtLink class="card-footer-item" :to="'/projects/' + project._id">
            <button class="btn view-btn">View</button>
          </NuxtLink>
        </footer>
      </b-collapse>
    </div>

    <div id="freelancer-tab-3" class="tabcontent">
      <ConnectionsTabContent />
    </div>
  </div>
</template>

<script>
import ConnectionsTabContent from "./ConnectionsTabContent";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FreelancerTabs",
  components: {
    ConnectionsTabContent,
  },
  computed: {
    ...mapGetters(["getUser", "getProjectsByUID"]),
  },
  methods: {
    ...mapActions(["fetchAllProjects"]),
    changeTab: (evt, cityName) => {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    },
  },
  created() {
    this.fetchAllProjects();
  },
};
</script>

<style scoped>
.freelancer-tabs {
  margin-top: 3rem;
}
.tab {
  border-bottom: 2px solid #ffffff;
  overflow: hidden;
}
.tab button {
  background-color: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #939498;
  cursor: pointer;
  float: left;
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  padding: 0.6rem 2rem;
  transition: all 0.2s ease;
}
.tab button:hover {
  color: #5d5755;
}
.tab button.active {
  border-bottom: 3px solid #c21e39;
  color: #c21e39;
}
.tabcontent {
  background-color: #ffffff;
  box-shadow: 0 10px 6px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  display: none;
  margin: 1.5rem 0;
}
.activetab {
  display: block;
}
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
.experience-right {
  display: flex;
  align-items: center;
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
.open-icon {
  color: #c21e39;
}
.view-btn {
  color: #c21e39;
}
@media only screen and (max-width: 600px) {
  .tab button {
    padding: 0.6rem 1rem;
  }
}
</style>