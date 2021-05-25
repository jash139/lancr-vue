<template>
  <p class="back-btn" @click="goBack">
    <svg
      width="12"
      height="12"
      viewBox="0 0 17 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3052 0.489163C13.6592 0.174075 14.1167 0 14.5906 0V0C16.3461 0 17.1932 2.15073 15.9092 3.34782L6.62903 12L15.9092 20.6522C17.1932 21.8493 16.3461 24 14.5906 24V24C14.1167 24 13.6592 23.8259 13.3052 23.5108L1.21036 12.747C0.763435 12.3493 0.763436 11.6507 1.21036 11.253L13.3052 0.489163Z"
        fill="#5D5755"
      />
    </svg>
    Back
  </p>
</template>

<script>
export default {
  name: "BackButton",
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.back-btn {
  color: #5d5755;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem 0 0;
}
.back-btn:hover {
  color: #050303;
}
</style>