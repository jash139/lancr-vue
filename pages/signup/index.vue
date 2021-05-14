<template>
  <div>
    <AppBar />
    <div class="content">
      <div class="card">
        <h2 class="heading">Sign up</h2>
        <p class="top-message">Welcome! Sign up to get started</p>
        <v-text-field class="text-field" v-model="email" label="Email" />
        <v-text-field
          class="text-field"
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          counter
          @click:append="show = !show"
        />
        <button
          class="btn primary-btn btn-shadow signup-btn"
          @click="handleSubmit"
        >
          Create Account
        </button>
        <p class="account-message">
          Already have an account?
          <NuxtLink to="/signup" class="link">Sign in</NuxtLink>
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
.text-field {
  color: #c21e39 !important;
}
.text-field .v-label {
  color: #c21e39;
  font-size: 1rem;
  font-weight: 700;
}
.text-field .v-label--active {
  transform: translate(-8px, -18px) scale(0.75);
}
.text-field input {
  color: #5d5755 !important;
  font-size: 0.9rem;
  font-weight: 700;
}
.signup-btn {
  margin: 1rem 0 0.5rem;
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