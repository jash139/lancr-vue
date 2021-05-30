<template>
  <div>
    <NuxtLink to="/post-project">
      <button class="post-project">
        <p>Post Project</p>
        <v-icon>mdi-plus</v-icon>
      </button>
    </NuxtLink>
    <b-collapse
      v-for="project in projects"
      :key="project._id"
      animation="slide"
      :open="false"
    >
      <template #trigger="props">
        <div class="card-header" role="button">
          <p class="card-header-title">{{ project.title }}</p>
          <a class="card-header-icon">
            <b-icon
              :icon="props.open ? 'menu-up' : 'menu-down'"
              class="open-icon"
            >
            </b-icon>
          </a>
        </div>
      </template>

      <div class="card-content">
        <div class="content">
          {{ project.description }}
        </div>
      </div>
      <footer class="card-footer">
        <NuxtLink class="card-footer-item" :to="'/projects/' + project._id">
          <button class="btn view-btn">View</button>
        </NuxtLink>
        <NuxtLink class="card-footer-item" :to="'/edit-project/' + project._id">
          <button class="btn edit-btn">Edit</button>
        </NuxtLink>
      </footer>
    </b-collapse>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      projects: "getCurrentUserProjects",
    }),
  },
  name: "ProjectsTabContent",
};
</script>

<style scoped>
.post-project {
  color: #c21e39;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.open-icon {
  color: #c21e39;
}
.view-btn {
  color: #c21e39;
}
.edit-btn {
  color: #050303;
}
</style>