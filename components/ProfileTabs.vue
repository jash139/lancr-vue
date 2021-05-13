<template>
  <div class="profile-tabs">
    <div class="tab">
      <button
        class="tablinks active"
        @click="changeTab($event, 'profile-tab-1')"
      >
        Profile
      </button>
      <button class="tablinks" @click="changeTab($event, 'profile-tab-2')">
        Projects
      </button>
    </div>

    <div id="profile-tab-1" class="tabcontent activetab">
      <h1>Profile</h1>
    </div>

    <div id="profile-tab-2" class="tabcontent">
      <ProjectsTabContent />
    </div>
  </div>
</template>

<script>
import ProjectsTabContent from "./ProjectsTabContent";

export default {
  name: "ProfileTabs",
  components: {
    ProjectsTabContent,
  },
  methods: {
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
};
</script>

<style scoped>
.profile-tabs {
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
  padding: 2rem;
}
.activetab {
  display: block;
}
</style>