<template>
  <div>
    <div class="applicant-card">
      <div class="body">
        <img
          src="https://images.unsplash.com/photo-1563497425252-36b755215241?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Avatar"
          class="avatar"
        />
        <div class="details">
          <h2 class="name">Doggo Gang</h2>
          <div class="role">Underworld don</div>
        </div>
      </div>
      <v-btn icon class="connect-btn">
        <svg
          width="20"
          height="20"
          viewBox="0 0 88 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 68.8333C0 57.3274 9.3274 48 20.8333 48H56.1667C67.6726 48 77 57.3274 77 68.8333V68.8333C77 71.1345 75.1345 73 72.8333 73H4.16666C1.86548 73 0 71.1345 0 68.8333V68.8333Z"
            fill="#5D5755"
          />
          <circle cx="39" cy="22" r="22" fill="#5D5755" />
          <rect x="78" y="22" width="3" height="18" rx="1.5" fill="#5D5755" />
          <rect
            x="70"
            y="32"
            width="3"
            height="18"
            rx="1.5"
            transform="rotate(-90 70 32)"
            fill="#5D5755"
          />
        </svg>
      </v-btn>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
export default {
  name: "ApplicantCard",
};
</script>

<style scoped>
.applicant-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0;
}
.body {
  display: flex;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 1rem;
}
.avatar {
  border-radius: 20rem;
  max-width: 50px;
}
.name {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
}
.role {
  background-color: #c21e39;
  border-radius: 5rem;
  color: #ffffff;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 1rem;
}
.connect-btn {
  border: 1px solid #cdcdcd;
  height: 35px;
  width: 35px;
}
.divider {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 0.5px;
  width: 100%;
}
</style>