<template>
  <div>
    <button
      class="btn primary-btn btn-shadow edit-btn"
      @click="isModalActive = true"
    >
      Edit Details
    </button>
    <b-modal v-model="isModalActive" :width="640" scroll="keep" full-screen>
      <div class="edit-modal">card content</div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ProfileEditButton",
  data() {
    return {
      isModalActive: false,
    };
  },
};
</script>

<style scoped>
.edit-btn {
  margin-top: 0.5rem;
}
</style>