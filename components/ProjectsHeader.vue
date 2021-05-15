<template>
  <div class="projects-header">
    <h2 class="heading">Projects</h2>
    <div class="actions">
      <SortByDropdown />
    </div>
  </div>
</template>

<script>
import SortByDropdown from "./SortByDropdown";

export default {
  name: "ProjectsHeader",
  components: {
    SortByDropdown,
  },
};
</script>

<style scoped>
.projects-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
}
.heading {
  color: #050303;
  font-size: 1.6rem;
  font-weight: 600;
}
</style>