<template>
  <div class="contacts-footer">
    <div class="stroke" />
    <v-btn icon large class="contact-btn" @click="handleClick(linkedin)">
      <LinkedinIcon />
    </v-btn>
    <v-btn icon large class="contact-btn" @click="handleClick(github)">
      <GithubIcon />
    </v-btn>
    <v-btn icon large class="contact-btn" @click="handleEmailClick(email)">
      <EmailIcon />
    </v-btn>
  </div>
</template>

<script>
import LinkedinIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";
import EmailIcon from "./EmailIcon";
import homeContent from "../assets/homeContent";
import { openTab, copyEmail } from "../assets/methods";
import { mapActions } from "vuex";

export default {
  name: "ContactsFooter",
  data() {
    return {
      linkedin: "",
      github: "",
      email: "",
    };
  },
  components: {
    LinkedinIcon,
    GithubIcon,
    EmailIcon,
  },
  methods: {
    ...mapActions(["showNotificationMessage"]),
    handleClick(link) {
      openTab(link);
    },
    handleEmailClick(link) {
      copyEmail(link);
      this.showNotificationMessage("Email copied!");
    },
  },
  created() {
    this.linkedin = homeContent.contactLinks.linkedin;
    this.github = homeContent.contactLinks.github;
    this.email = homeContent.contactLinks.email;
  },
};
</script>

<style scoped>
.contacts-footer {
  display: flex;
  align-items: center;
  min-height: 10vh;
}
.stroke {
  background-color: #c21e39;
  border-radius: 5rem;
  height: 0.2rem;
  width: 5rem;
}
.contact-btn {
  height: 40px;
  width: 40px;
  margin: 0 0.2rem;
}
</style>