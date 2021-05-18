<template>
  <div class="projects-header">
    <h2 class="heading">Projects</h2>
    <div class="actions">
      <SortByDropdown />
      <Filters />
    </div>
  </div>
</template>

<script>
import SortByDropdown from "./SortByDropdown";
import Filters from "./Filters";

export default {
  name: "ProjectsHeader",
  components: {
    SortByDropdown,
    Filters,
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
.actions {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 1100px) {
  .projects-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>