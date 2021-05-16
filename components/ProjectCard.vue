<template>
  <div class="project-card card-shadow">
    <div class="project-card-header">
      <img
        src="https://images.unsplash.com/photo-1563497425252-36b755215241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="Avatar"
        class="avatar"
      />
      <p class="sub-heading">A few hours ago</p>
    </div>
    <div class="divider" />
    <div class="card-body">
      <p class="sub-heading">By Doggo Gang</p>
      <h2 class="title">Project Title</h2>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
    </div>
    <button class="view-btn btn primary-btn btn-shadow">View Project</button>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
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
.avatar {
  border-radius: 20rem;
  max-width: 90px;
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