<template>
  <div class="tab-card">
    <div class="tab-content">
      <div
        v-for="connection in connections(currentUser.connections)"
        :key="connection.uid"
        :user="connection"
      >
        <div class="connection-card">
          <NuxtLink :to="'/freelancers/' + connection.uid">
            <div class="body">
              <div
                v-if="connection.profilePicture === ''"
                class="default-avatar"
              >
                {{ connection.name.charAt(0).toUpperCase() }}
              </div>
              <img
                v-else
                :src="connection.profilePicture"
                :alt="connection.name.charAt(0).toUpperCase()"
                class="avatar"
              />
              <div class="details">
                <h2 class="name">{{ connection.name }}</h2>
                <div class="title">{{ connection.title }}</div>
              </div>
            </div>
          </NuxtLink>
          <v-btn icon class="message-btn" @click="openChat(connection)">
            <b-icon icon="send"></b-icon>
          </v-btn>
        </div>
        <div class="divider" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ConnectionsTabContent",
  computed: {
    ...mapGetters({
      connections: "getCurrentUserConnections",
      currentUser: "getCurrentUser",
    }),
  },
  methods: {
    ...mapActions(["fetchAllFreelancers", "fetchActiveChatUser"]),
    openChat(connection) {
      this.fetchActiveChatUser(connection.uid);
      this.$router.push("/chats");
    },
  },
  created() {
    this.fetchAllFreelancers();
  },
};
</script>

<style scoped>
.tab-card {
  margin: auto;
  max-width: 900px;
  padding: 2rem;
}
.tab-content {
  max-height: 500px;
  overflow-y: auto;
}
.tab-content::-webkit-scrollbar {
  width: 1.5rem;
}
.tab-content::-webkit-scrollbar-thumb {
  background-color: #e5ecee;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
.connection-card {
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
.default-avatar {
  background-color: #f2e9e6;
  border-radius: 20rem;
  color: #c21e39;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
}
.avatar {
  border-radius: 20rem;
  height: 50px;
  width: 50px;
}
.name {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
}
.title {
  background-color: #c21e39;
  border-radius: 5rem;
  color: #ffffff;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 1rem;
}
.message-btn {
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