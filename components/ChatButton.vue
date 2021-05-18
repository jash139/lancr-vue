<template>
  <b-button type="is-light" size="is-medium" class="chat-button">
    <b-icon icon="chat"> </b-icon>
  </b-button>
</template>

<script>
export default {
  name: "ChatButton",
};
</script>

<style scoped>
.chat-button {
  background-color: #c21e39;
  border-radius: 5rem;
  color: #ffffff;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  height: 50px;
  width: 50px;
  z-index: 5;
}
.chat-button:hover {
  background-color: #c21e39;
  color: #ffffff;
}
.chat-button:focus {
  color: #ffffff;
}
</style>