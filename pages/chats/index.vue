<template>
  <div class="chats-page">
    <AppBar />
    <div class="content">
      <BackButton />
      chats
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.chats-page {
  min-height: 100vh;
}
.content {
  max-width: 95%;
  margin: auto;
}
</style>