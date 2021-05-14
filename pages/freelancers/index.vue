<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <FreelancerCard />
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
</style>