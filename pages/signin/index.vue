<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <div class="card">
        <h2 class="heading">Sign in</h2>
        <p class="message">
          Welcome back!<br />Did you
          <NuxtLink to="/forget-password" class="link">
            forget your password?
          </NuxtLink>
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

        <button
          class="btn primary-btn btn-shadow login-btn"
          @click="handleSubmit"
        >
          Login
        </button>
        <p class="message">
          Don't have an account?
          <NuxtLink to="/signup" class="link">Create a new account</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";

export default {
  data() {
    return {
      show: true,
      email: "",
      password: "",
    };
  },
  components: {
    AppBar,
  },
  methods: {
    handleSubmit: () => console.log("submit"),
  },
};
</script>

<style>
.root {
}
.content {
  max-width: 95%;
  margin: auto;
}
.card {
  background-color: #ffffff;
  box-shadow: 0 10px 6px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  max-width: 450px;
  padding: 2rem;
  text-align: center;
}
.heading {
  color: #c21e39;
  font-size: 1.6rem;
  margin: 1rem 0;
}
.message {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;
}
.login-btn {
  margin: 1rem 0;
  width: 100%;
}
.link {
  color: #c21e39;
  text-decoration: none;
}
</style>