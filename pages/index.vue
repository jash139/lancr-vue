<template>
  <div class="home">
    <ChatButton />
    <HomeNavBar />
    <div class="hero-section">
      <div class="content">
        <div class="cta-section">
          <h1 class="main-heading">
            {{ mainHeading.para1 }}
            <br />
            {{ mainHeading.para2 }}
            <br />
            {{ mainHeading.para3 }}
          </h1>
          <div class="shift-right">
            <div class="white-stroke" />
            <div>
              <p class="sub-heading">
                {{ subHeading.para1 }}
                <br />
                {{ subHeading.para2 }}
                <br />
                {{ subHeading.para3 }}
              </p>
              <div class="btns">
                <div class="dots">
                  <LightDotsSvg />
                </div>
                <NuxtLink to="/projects">
                  <button class="btn primary-btn btn-shadow cta-btn">
                    Projects
                  </button>
                </NuxtLink>
                <NuxtLink to="/freelancers">
                  <button class="btn primary-btn btn-shadow cta-btn">
                    Freelancers
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="work-svg">
          <WorkSvg />
        </div>
      </div>
      <ContactsFooter />
    </div>
    <AboutSection />
    <FeaturesSection />
    <ContactSection />
  </div>
</template>

<script>
import ChatButton from "../components/ChatButton";
import WorkSvg from "../components/WorkSvg";
import ContactsFooter from "../components/ContactsFooter";
import HomeNavBar from "../components/HomeNavBar";
import LightDotsSvg from "../components/LightDotsSvg";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import ContactSection from "../components/ContactSection";
import homeContent from "../assets/homeContent";

export default {
  computed: {
    mainHeading: () => homeContent.mainHeading,
    subHeading: () => homeContent.subHeading,
  },
  components: {
    ChatButton,
    WorkSvg,
    ContactsFooter,
    HomeNavBar,
    LightDotsSvg,
    AboutSection,
    ContactSection,
    FeaturesSection,
  },
};
</script>

<style scoped>
.home {
  background-color: #f2e9e6;
  min-height: 100vh;
}
.hero-section {
  max-width: 95%;
  margin: auto;
  min-height: 90vh;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
  margin-bottom: 0;
}
.main-heading {
  color: #050303;
  margin: 1rem 0;
  text-transform: uppercase;
}
.shift-right {
  display: flex;
}
.white-stroke {
  background-color: #ffffff;
  border-radius: 5rem;
  height: 0.2rem;
  margin: 1.5rem 1rem 0 0;
  width: 2rem;
}
.sub-heading {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem 0;
}
.btns {
  margin-top: 2rem;
  position: relative;
}
.dots {
  bottom: -35px;
  left: -35px;
  position: absolute;
}
.cta-btn {
  margin-right: 1rem;
  width: 8.5rem;
}
@media only screen and (max-width: 960px) {
  .content {
    flex-direction: column-reverse;
    text-align: center;
  }
  .white-stroke {
    display: none;
  }
  .cta-btn {
    margin: 0 0.5rem;
  }
  .shift-right {
    justify-content: center;
  }
}
</style>