<template>
  <div class="freelancers-header">
    <h2 class="heading">Freelancers</h2>
    <Filters />
  </div>
</template>

<script>
import Filters from "./Filters";

export default {
  name: "FreelancersHeader",
  components: {
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
@media only screen and (max-width: 1100px) {
  .freelancers-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>