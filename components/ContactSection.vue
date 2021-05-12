<template>
  <div class="contact-section">
    <h2 class="heading">Get in Touch</h2>
    <div class="contact-links">
      <div class="contact">
        <v-btn icon class="contact-icon" onClick="handleEmailClick">
          <LinkedinIcon :light="true" />
        </v-btn>
        <p class="link" onClick="handleEmailClick">
          {homeContent.contactLinks.email}
        </p>
      </div>
      <div class="contact">
        <v-btn icon class="contact-icon" onClick="openTab">
          <GithubIcon :light="true" />
        </v-btn>
        <p class="link" onClick="openTab">{homeContent.contactLinks.email}</p>
      </div>
      <div class="contact">
        <v-btn icon class="contact-icon" onClick="openTab">
          <EmailIcon :light="true" />
        </v-btn>
        <p class="link" onClick="openTab">{homeContent.contactLinks.email}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LinkedinIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";
import EmailIcon from "./EmailIcon";

export default {
  name: "ContactSection",
  components: {
    LinkedinIcon,
    GithubIcon,
    EmailIcon,
  },
};
</script>

<style scoped>
.contact-section {
  background-color: #050303;
  color: #ffffff;
  padding: 4rem 0;
  text-align: center;
}
.heading {
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
}
.contact-links {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0 1rem;
}
.link {
  cursor: pointer;
  font-size: 0.9rem;
}
.link:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 960px) {
  .contact-links {
    display: unset;
  }
}
</style>