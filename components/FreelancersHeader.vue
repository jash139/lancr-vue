<template>
  <div class="freelancers-header">
    <h2 class="heading">Freelancers</h2>
    <div class="actions">
      <SortByDropdown />
    </div>
  </div>
</template>

<script>
import SortByDropdown from "./SortByDropdown";

export default {
  name: "FreelancersHeader",
  components: {
    SortByDropdown,
  },
};
</script>

<style scoped>
</style>