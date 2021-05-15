<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <div class="projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import ProjectCard from "../../components/ProjectCard";

export default {
  components: {
    AppBar,
    ProjectCard,
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