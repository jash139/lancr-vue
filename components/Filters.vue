<template>
  <div class="filters">
    <p class="filter">Filter</p>
    <SkillsDropdown />
    <LocationDropdown />
  </div>
</template>

<script>
import SkillsDropdown from "./SkillsDropdown";
import LocationDropdown from "./LocationDropdown";

export default {
  name: "Filters",
  components: {
    SkillsDropdown,
    LocationDropdown,
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
.filter {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 0.5rem;
}
@media only screen and (max-width: 1100px) {
  .filters {
    flex-direction: column;
    align-items: flex-start;
    margin: 0.5rem 0;
  }
  .filter {
    padding-bottom: 0.5rem;
  }
}
</style>