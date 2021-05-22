<template>
  <div>
    <AppBar />
    <div class="content">
      <div class="card">
        <h2 class="heading">Sign in</h2>
        <p class="top-message">
          Welcome back!<br />Did you
          <NuxtLink to="/forget-password" class="link">
            forget your password?
          </NuxtLink>
        </p>
        <v-form>
          <v-text-field class="sign-text-field" v-model="email" label="Email" />
          <v-text-field
            class="sign-text-field"
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            counter
            @click:append="show = !show"
          />
        </v-form>
        <b-button
          class="btn primary-btn btn-shadow signin-btn"
          @click="handleSubmit"
        >
          Sign in
        </b-button>
        <p class="account-message">
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
      show: false,
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

<style scoped>
.content {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 95%;
}
.card {
  background-color: #ffffff;
  box-shadow: 0 10px 6px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  padding: 2rem;
  text-align: center;
  width: 400px;
}
.heading {
  color: #c21e39;
  font-size: 1.6rem;
  margin: 0.8rem 0;
}
.top-message {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 1rem 0 1.5rem;
}
.account-message {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 700;
}
.signin-btn {
  color: #ffffff;
  margin: 1rem 0 0.5rem;
  padding: 1.1rem 2rem;
  width: 100%;
}
.link {
  color: #c21e39;
  text-decoration: none;
}
@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>