<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <ProjectsHeader />
      <div class="projects">
        <ProjectCard
          v-for="project in allProjects"
          :key="project._id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import ProjectsHeader from "../../components/ProjectsHeader";
import ProjectCard from "../../components/ProjectCard";

export default {
  computed: {
    allProjects() {
      return this.$store.state.allProjects;
    },
  },
  components: {
    AppBar,
    ProjectsHeader,
    ProjectCard,
  },
  methods: {
    fetchAllProjects() {
      const store = this.$store;
      store
        .dispatch("fetchAllProjects")
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
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