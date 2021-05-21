<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <FreelancersHeader />
      <div class="freelancers">
        <FreelancerCard
          v-for="freelancer in allFreelancers"
          :key="freelancer._id"
          :freelancer="freelancer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import FreelancersHeader from "../../components/FreelancersHeader";
import FreelancerCard from "../../components/FreelancerCard";

export default {
  computed: {
    allFreelancers() {
      return this.$store.state.allFreelancers;
    },
  },
  components: {
    AppBar,
    FreelancersHeader,
    FreelancerCard,
  },
  methods: {
    fetchAllFreelancers() {
      const store = this.$store;
      store
        .dispatch("fetchAllFreelancers")
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchAllFreelancers();
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