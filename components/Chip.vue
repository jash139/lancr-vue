<template>
  <div class="chip">{{ text }}</div>
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
  color: #c21e39;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0.5rem 0.4rem 0.2rem 0;
  padding: 0.1rem 1.2rem;
}
</style>