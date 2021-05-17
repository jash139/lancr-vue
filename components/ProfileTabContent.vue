<template>
  <div class="tab-card">
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Experience</h4>
        <div class="stroke" />
      </div>
      <div class="exp">
        <div class="experience">
          <div>
            <h3 class="org">Netflix</h3>
            <p class="role">Full Stack Developer</p>
          </div>
          <p class="duration">May 2000 - Dec 2001</p>
        </div>
        <div class="experience">
          <div>
            <h3 class="org">Netflix</h3>
            <p class="role">Full Stack Developer</p>
          </div>
          <p class="duration">May 2000 - Dec 2001</p>
        </div>
        <div class="experience">
          <div>
            <h3 class="org">Netflix</h3>
            <p class="role">Full Stack Developer</p>
          </div>
          <p class="duration">May 2000 - Dec 2001</p>
        </div>
        <div class="experience">
          <div>
            <h3 class="org">Netflix</h3>
            <p class="role">Full Stack Developer</p>
          </div>
          <p class="duration">May 2000 - Dec 2001</p>
        </div>
        <div class="experience">
          <div>
            <h3 class="org">Netflix</h3>
            <p class="role">Full Stack Developer</p>
          </div>
          <p class="duration">May 2000 - Dec 2001</p>
        </div>
        <div class="experience">
          <div>
            <h3 class="org">Netflix</h3>
            <p class="role">Full Stack Developer</p>
          </div>
          <p class="duration">May 2000 - Dec 2001</p>
        </div>
        <div class="experience">
          <div>
            <h3 class="org">Netflix</h3>
            <p class="role">Full Stack Developer</p>
          </div>
          <p class="duration">May 2000 - Dec 2001</p>
        </div>
        <div class="experience">
          <div>
            <h3 class="org">Netflix</h3>
            <p class="role">Full Stack Developer</p>
          </div>
          <p class="duration">May 2000 - Dec 2001</p>
        </div>
      </div>
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Skills</h4>
        <div class="stroke" />
      </div>
      <Chip text="React" />
      <Chip text="Redux" />
      <Chip text="Vue" />
      <Chip text="Vuex" />
      <Chip text="Html" />
      <Chip text="Css" />
      <Chip text="Javascript" />
      <Chip text="React" />
      <Chip text="Redux" />
      <Chip text="Vue" />
      <Chip text="Vuex" />
      <Chip text="Html" />
      <Chip text="Css" />
      <Chip text="Javascript" />
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">About</h4>
        <div class="stroke" />
      </div>
      <p class="details-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod magna aliqua.
      </p>
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Languages</h4>
        <div class="stroke" />
      </div>
      <div class="language">
        French
        <div class="divider" />
      </div>
      <div class="language">
        German
        <div class="divider" />
      </div>
      <div class="language">
        Bhojpuri
        <div class="divider" />
      </div>
    </div>
  </div>
</template>

<script>
import Chip from "./Chip";

export default {
  name: "ProfileTabContent",
  components: {
    Chip,
  },
};
</script>

<style scoped>
.tab-card {
  margin: auto;
  max-width: 900px;
  padding: 2rem;
}
.card-section {
  margin: 2rem 0;
}
.heading-div {
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
}
.heading {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 700;
}
.stroke {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 0.5px;
  margin-left: 1rem;
  width: 100%;
}
.experience {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1.5rem 0;
}
.org {
  color: #5d5755;
  font-size: 1.4rem;
}
.role {
  color: #5d5755;
  font-size: 1rem;
  font-style: italic;
  font-weight: 500;
}
.duration {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 500;
}
.exp {
  max-height: 350px;
  overflow-y: auto;
}
.exp::-webkit-scrollbar {
  width: 1.5rem;
}
.exp::-webkit-scrollbar-thumb {
  background-color: #e5ecee;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
.details-info {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
}
.language {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}
.divider {
  background-color: #f2e9e6;
  border-radius: 2rem;
  height: 1.5rem;
  margin: 0 1.5rem;
  width: 0.5px;
}
</style>