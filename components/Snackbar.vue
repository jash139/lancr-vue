<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    notify(message) {
      this.$buefy.snackbar.open({
        duration: 3000,
        message: message,
        type: "is-danger",
        position: "is-bottom-left",
        actionText: "Ok",
      });
    },
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "setNotificationMessage") {
        this.notify(state.notificationMessage);
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>

<style scoped>
</style>