<template>
  <div class="freelancers-header">
    <h2 class="heading">Freelancers</h2>
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
  name: "FreelancersHeader",
  components: {
    SortByDropdown,
    Filters,
  },
};
</script>

<style scoped>
.freelancers-header {
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