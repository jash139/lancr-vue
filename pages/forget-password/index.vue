<template>
  <div>
    <AppBar />
    <div class="content">
      <div class="card">
        <h2 class="heading">Forgot Password</h2>
        <v-form>
          <v-text-field class="sign-text-field" v-model="email" label="Email" />
        </v-form>
        <b-button
          class="btn primary-btn btn-shadow send-btn"
          @click="handleSubmit"
          :loading="loading"
        >
          Send mail
        </b-button>
        <p class="account-message">
          <NuxtLink to="/signin" class="link">Signin</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
      email: "",
    };
  },
  components: {
    AppBar,
  },
  methods: {
    ...mapActions(["resetPassword"]),
    handleSubmit() {
      this.loading = true;
      if (this.email === "") {
        // display error message using global state for snackbar
        this.loading = false;
        return;
      }
      this.resetPassword({
        email: this.email,
      }).then(() => {
        this.email = "";
        this.loading = false;
        this.$router.push("/signin");
      });
    },
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
.account-message {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 700;
}
.send-btn {
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