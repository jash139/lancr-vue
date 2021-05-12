<template>
  <div class="contacts-footer">
    <div class="stroke" />
    <v-btn icon large class="contact-btn">
      <LinkedinIcon />
    </v-btn>
    <v-btn icon large class="contact-btn">
      <GithubIcon />
    </v-btn>
    <v-btn icon large class="contact-btn">
      <EmailIcon />
    </v-btn>
  </div>
</template>

<script>
import LinkedinIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";
import EmailIcon from "./EmailIcon";

export default {
  name: "ContactsFooter",
  components: {
    LinkedinIcon,
    GithubIcon,
    EmailIcon,
  },
};
</script>

<style scoped>
.contacts-footer {
  display: flex;
  align-items: center;
  margin: auto;
  max-width: 95%;
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