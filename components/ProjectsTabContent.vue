<template>
  <div>
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
        <NuxtLink :to="'/projects/' + project._id">
          <button class="card-footer-item btn view-btn">View</button>
        </NuxtLink>
        <button class="card-footer-item btn edit-btn">Edit</button>
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
.open-icon {
  color: #c21e39;
}
.view-btn {
  color: #c21e39;
}
.edit-btn {
}
</style>