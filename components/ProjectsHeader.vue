<template>
  <div class="projects-header">
    <div class="main-header">
      <h2 class="heading">Projects</h2>
      <NuxtLink to="/post-project">
        <button class="btn primary-btn post-project-btn">Post Project</button>
      </NuxtLink>
    </div>
    <div class="actions">
      <SortByDropdown @set-sort-type="setSortType" />
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
  methods: {
    setSortType(type) {
      this.$emit("set-sort-type", type);
    },
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
.main-header {
  display: flex;
  align-items: center;
}
.post-project-btn {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
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