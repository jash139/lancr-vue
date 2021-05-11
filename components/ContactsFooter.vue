<template>
  <div class="contacts-footer">
    <div class="stroke" />
    <v-btn icon large>
      <LinkedinIcon />
    </v-btn>
    <v-btn icon large>
      <GithubIcon />
    </v-btn>
    <v-btn icon large>
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
}
.stroke {
}
</style>