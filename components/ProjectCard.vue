<template>
  <div class="project-card card-shadow">
    <div class="project-card-header">
      <div v-if="ownerDetails.profilePicture === ''" class="default-avatar">
        {{ ownerDetails.name.charAt(0).toUpperCase() }}
      </div>
      <img v-else :src="ownerDetails.profilePicture" alt="" class="avatar" />
      <p class="sub-heading">
        {{ new Date(project.createdAt).toDateString() }}
      </p>
    </div>
    <div class="divider" />
    <div class="card-body">
      <p class="sub-heading">{{ "By " + ownerDetails.name }}</p>
      <h2 class="title">{{ project.title }}</h2>
      <p class="description">{{ project.description.substring(0, 50) }}</p>
    </div>
    <NuxtLink :to="'/projects/' + project._id">
      <button class="view-btn btn primary-btn btn-shadow">View Project</button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ownerDetails: {},
    };
  },
  methods: {
    fetchOwnerDetails() {
      this.$axios
        .get("/users/" + this.project.uid)
        .then((res) => {
          this.ownerDetails = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchOwnerDetails();
  },
};
</script>

<style scoped>
.project-card {
  background-color: #ffffff;
  border-radius: 3px;
  max-width: 380px;
  min-width: 300px;
  margin: auto;
  padding: 1.5rem;
}
.project-card-header {
  display: flex;
  justify-content: space-between;
}
.default-avatar {
  background-color: #f2e9e6;
  border-radius: 20rem;
  color: #c21e39;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 90px;
}
.avatar {
  border-radius: 20rem;
  height: 90px;
  object-fit: cover;
  width: 90px;
}
.sub-heading {
  color: #cdcdcd;
  font-size: 0.9rem;
  font-weight: 500;
}
.divider {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 0.5px;
  margin: 1rem 0;
  width: 100%;
}
.title {
  color: #c21e39;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.description {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 1rem 0;
}
.view-btn {
  margin-top: 1rem;
  width: 100%;
}
</style>