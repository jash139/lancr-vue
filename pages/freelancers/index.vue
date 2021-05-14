<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <div class="freelancers">
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import FreelancerCard from "../../components/FreelancerCard";

export default {
  components: {
    AppBar,
    FreelancerCard,
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
.freelancers {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto auto auto auto;
}
@media only screen and (max-width: 1400px) {
  .freelancers {
    grid-template-columns: auto auto auto;
  }
}
@media only screen and (max-width: 1080px) {
  .freelancers {
    grid-template-columns: auto auto;
  }
}
@media only screen and (max-width: 700px) {
  .freelancers {
    grid-template-columns: auto;
  }
}
</style>