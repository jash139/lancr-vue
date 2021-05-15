<template>
  <div class="projects-header">
    <SortByDropdown />
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
</style>