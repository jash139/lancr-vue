<template>
  <div class="tab-card">
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Experience</h4>
        <div class="stroke" />
        <v-btn icon class="edit-btn" @click="isExperienceModalActive = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <div class="exp">
        <div
          v-for="experience in getCurrentUser.experience"
          :key="experience.start"
          class="experience"
        >
          <div>
            <h3 class="org">{{ experience.organization }}</h3>
            <p class="role">{{ experience.role }}</p>
          </div>
          <p class="duration">{{ experience.start }} - {{ experience.end }}</p>
        </div>
      </div>
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Skills</h4>
        <div class="stroke" />
        <v-btn icon class="edit-btn" @click="isSkillsModalActive = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <Chip v-for="skill in getCurrentUser.skills" :key="skill" :text="skill" />
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">About</h4>
        <div class="stroke" />
        <v-btn icon class="edit-btn" @click="isAboutModalActive = true">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <p class="details-info">{{ getCurrentUser.about }}</p>
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Languages</h4>
        <div class="stroke" />
        <v-btn icon class="edit-btn" @click="isLanguagesModalActive = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <div
        v-for="language in getCurrentUser.languages"
        :key="language"
        class="language"
      >
        {{ language }}
        <div class="divider" />
      </div>
    </div>

    <b-modal v-model="isExperienceModalActive" scroll="keep">
      <div class="edit-modal">
        <div class="modal-header">
          <h2 class="edit-details">Add Experience</h2>
        </div>
        <v-text-field
          color="#c21e39"
          v-model="experience.organization"
          label="Organization"
        />
        <v-text-field color="#c21e39" v-model="experience.role" label="Role" />
        <div data-app>
          <v-menu
            ref="menu"
            v-model="menuStart"
            :close-on-content-click="true"
            transition="scale-transition"
            offset-y
            min-width="auto"
            nudge-top="100px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="experience.start"
                label="Start Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                color="#c21e39"
              ></v-text-field>
            </template>
            <v-date-picker
              color="#c21e39"
              v-model="experience.start"
              :active-picker.sync="activePicker"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="saveStartDate"
            ></v-date-picker>
          </v-menu>
          <v-menu
            ref="menu"
            v-model="menuEnd"
            :close-on-content-click="true"
            transition="scale-transition"
            offset-y
            min-width="auto"
            nudge-top="100px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="experience.end"
                label="End Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                color="#c21e39"
              ></v-text-field>
            </template>
            <v-date-picker
              color="#c21e39"
              v-model="experience.end"
              :active-picker.sync="activePicker"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="saveEndDate"
            ></v-date-picker>
          </v-menu>
        </div>

        <div class="card-actions">
          <button class="btn outlined-btn action-btns" @click="handleCancel">
            Cancel
          </button>
          <button class="btn primary-btn action-btns" @click="saveExperience">
            Save
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal v-model="isSkillsModalActive" scroll="keep">
      <div class="edit-modal">
        <div class="modal-header">
          <h2 class="edit-details">Edit Skills</h2>
        </div>
        <v-select
          v-model="skills"
          :items="allSkills"
          attach
          chips
          multiple
          color="#c21e39"
        ></v-select>
        <div class="card-actions">
          <button class="btn outlined-btn action-btns" @click="handleCancel">
            Cancel
          </button>
          <button class="btn primary-btn action-btns" @click="saveSkills">
            Save
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal v-model="isAboutModalActive" scroll="keep">
      <div class="edit-modal">
        <div class="modal-header">
          <h2 class="edit-details">Edit About</h2>
        </div>
        <v-textarea color="#c21e39" v-model="about" label="About" />
        <div class="card-actions">
          <button class="btn outlined-btn action-btns" @click="handleCancel">
            Cancel
          </button>
          <button class="btn primary-btn action-btns" @click="saveAbout">
            Save
          </button>
        </div>
      </div>
    </b-modal>

    <b-modal v-model="isLanguagesModalActive" scroll="keep">
      <div class="edit-modal">
        <div class="modal-header">
          <h2 class="edit-details">Edit Languages</h2>
        </div>
        <v-select
          v-model="languages"
          :items="allLanguages"
          attach
          chips
          multiple
          color="#c21e39"
        ></v-select>
        <div class="card-actions">
          <button class="btn outlined-btn action-btns" @click="handleCancel">
            Cancel
          </button>
          <button class="btn primary-btn action-btns" @click="saveLanguages">
            Save
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Chip from "./Chip";
import skills from "../assets/skills";
import isoLangs from "../assets/isoLangs";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileTabContent",
  data() {
    return {
      menuStart: false,
      menuEnd: false,
      activePicker: null,
      isAboutModalActive: false,
      isExperienceModalActive: false,
      isSkillsModalActive: false,
      isLanguagesModalActive: false,
      about: "",
      skills: [],
      languages: [],
      experience: {
        organization: "",
        role: "",
        start: "",
        end: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
    allSkills: () => skills,
    allLanguages: () => {
      let langs = [];
      for (const property in isoLangs) {
        langs.push(isoLangs[property].name);
      }
      return langs;
    },
  },
  components: {
    Chip,
  },
  methods: {
    ...mapActions(["patchCurrentUser"]),
    saveStartDate(date) {
      this.$refs.menu.save(date);
    },
    saveEndDate(date) {
      this.$refs.menu.save(date);
    },
    handleCancel() {
      this.isAboutModalActive = false;
      this.isExperienceModalActive = false;
      this.isSkillsModalActive = false;
      this.isLanguagesModalActive = false;
    },
    saveExperience() {
      const patchObj = {
        experience: [...this.getCurrentUser.experience, this.experience],
      };
      this.patchCurrentUser({ uid: this.getCurrentUser.uid, patchObj });
      this.experience = {
        organization: "",
        role: "",
        start: "",
        end: "",
      };
      this.handleCancel();
    },
    saveSkills() {
      const patchObj = {
        skills: this.skills,
      };
      this.patchCurrentUser({ uid: this.getCurrentUser.uid, patchObj });
      this.handleCancel();
    },
    saveLanguages() {
      const patchObj = {
        languages: this.languages,
      };
      this.patchCurrentUser({ uid: this.getCurrentUser.uid, patchObj });
      this.handleCancel();
    },
    saveAbout() {
      const patchObj = {
        about: this.about,
      };
      this.patchCurrentUser({ uid: this.getCurrentUser.uid, patchObj });
      this.handleCancel();
    },
  },
  created() {
    this.about = this.getCurrentUser.about;
    this.skills = this.getCurrentUser.skills;
    this.languages = this.getCurrentUser.languages;
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
.edit-btn {
  border: 2px solid #e5ecee;
  border-radius: 5rem;
  margin-left: 1rem;
  padding: 0.5rem;
  height: 30px;
  width: 30px;
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
.edit-modal {
  background-color: #ffffff;
  border-radius: 3px;
  margin: auto;
  max-height: 600px;
  width: 600px;
  max-width: 95%;
  padding: 2rem;
}
.edit-details {
  color: #c21e39;
  padding-bottom: 1rem;
}
.action-btns {
  margin: 0.5rem;
  width: 7rem;
}
@media only screen and (max-width: 960px) {
  .edit-modal {
    padding: 1rem;
  }
}
</style>