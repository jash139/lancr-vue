<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <BackButton />
      <ProjectsHeader @set-sort-type="setSortType" />
      <div class="projects">
        <ProjectCard
          v-for="project in projects(sortType)"
          :key="project._id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import BackButton from "../../components/BackButton";
import ProjectsHeader from "../../components/ProjectsHeader";
import ProjectCard from "../../components/ProjectCard";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      sortType: "none",
    };
  },
  computed: {
    ...mapGetters({
      projects: "getProjectsByType",
    }),
  },
  components: {
    AppBar,
    BackButton,
    ProjectsHeader,
    ProjectCard,
  },
  methods: {
    ...mapActions(["fetchAllProjects"]),
    setSortType(type) {
      this.sortType = type;
    },
  },
  created() {
    this.fetchAllProjects();
  },
};
</script>

<style scoped>
.root {
  min-height: 100vh;
  padding-bottom: 1.5rem;
}
.content {
  max-width: 95%;
  margin: auto;
}
.projects {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto auto auto auto;
}
@media only screen and (max-width: 1400px) {
  .projects {
    grid-template-columns: auto auto auto;
  }
}
@media only screen and (max-width: 1080px) {
  .projects {
    grid-template-columns: auto auto;
  }
}
@media only screen and (max-width: 700px) {
  .projects {
    grid-template-columns: auto;
  }
}
</style>