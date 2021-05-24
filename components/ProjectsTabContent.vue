<template>
  <div>
    <b-collapse animation="slide" :open="false">
      <template #trigger="props">
        <div class="card-header" role="button">
          <p class="card-header-title">Project Title</p>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </div>
      </div>
      <footer class="card-footer">
        <button class="card-footer-item btn view-btn">View</button>
        <button class="card-footer-item btn edit-btn">Edit</button>
      </footer>
    </b-collapse>
  </div>
</template>

<script>
export default {
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