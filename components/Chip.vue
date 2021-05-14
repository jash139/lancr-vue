<template>
  <div class="chip">
    <p class="chip-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Chip",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.chip {
  border: 2px solid #c21e39;
  border-radius: 5rem;
  display: inline-block;
  margin: 0.5rem 0.4rem 0.2rem 0;
  padding: 0.1rem 1.2rem;
}
.chip-text {
  color: #c21e39;
  font-size: 0.8rem;
  font-weight: 600;
}
</style>