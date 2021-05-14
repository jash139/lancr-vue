<template>
  <div class="root">
    <div class="card">
      <h2 class="heading">Sign in</h2>
      <p class="message">
        Welcome back!<br />Did you
        <NuxtLink to="/forget-password"> forget your password? </NuxtLink>
      </p>
      <!-- <p class="error">{{ error }}</p> -->

      <v-text-field v-model="email" label="Email" />
      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        counter
        @click:append="show = !show"
      />

      <button class="btn primary-btn btn-shadow" @click="handleSubmit">
        Login
      </button>
      <p class="message">
        Don't have an account?
        <NuxtLink to="/signup">Create a new account</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit: () => console.log("submit"),
  },
};
</script>

<style>
/* .card {
  min-height: 600px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
} */
</style>