<template>
  <div class="contact-section" id="contact">
    <h2 class="heading">Get in Touch</h2>
    <div class="contact-links">
      <div class="contact">
        <v-btn icon class="contact-btn" onClick="openTab">
          <EmailIcon :light="true" />
        </v-btn>
        <p class="link" onClick="openTab">
          {{ email }}
        </p>
      </div>
      <div class="contact">
        <v-btn icon class="contact-btn" @click="handleClick(linkedin)">
          <LinkedinIcon :light="true" />
        </v-btn>
        <p class="link" @click="handleClick(linkedin)">
          {{ linkedin }}
        </p>
      </div>
      <div class="contact">
        <v-btn icon class="contact-btn" @click="handleClick(github)">
          <GithubIcon :light="true" />
        </v-btn>
        <p class="link" @click="handleClick(github)">
          {{ github }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LinkedinIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";
import EmailIcon from "./EmailIcon";
import homeContent from "../assets/homeContent";
import { openTab } from "../assets/methods";

export default {
  name: "ContactSection",
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
    handleClick(link) {
      openTab(link);
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
.contact-section {
  background-color: #050303;
  color: #ffffff;
  padding: 4rem 0 2rem;
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
  padding: 1rem 0;
}
.contact {
  width: 250px;
}
.contact-btn {
  border: 1px solid #ffffff;
  margin-bottom: 1rem;
  height: 45px;
  width: 45px;
}
.link {
  cursor: pointer;
  font-size: 0.9rem;
  line-break: anywhere;
}
.link:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 960px) {
  .contact-links {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact {
    margin: 1rem 0;
  }
}
</style>