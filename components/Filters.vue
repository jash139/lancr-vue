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
.filter {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 0.5rem;
}
</style>