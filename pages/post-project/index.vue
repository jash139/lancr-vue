<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="projects-card card-shadow">
        <div class="header">
          <h2 class="title">By {{ getCurrentUser.name }}</h2>
          <div class="actions">
            <button
              class="apply-btn btn primary-btn btn-shadow"
              @click="saveProject"
            >
              Post
            </button>
            <button class="client-btn btn outlined-btn" @click="cancelPost">
              Cancel
            </button>
          </div>
        </div>
        <div class="card-section">
          <v-text-field color="#c21e39" v-model="title" label="Title" />
        </div>
        <div class="card-section">
          <div class="section-content">
            <div class="grid-item">
              <p class="heading">Status</p>
            </div>
            <div class="grid-item">
              <b-dropdown
                :scrollable="isScrollable"
                :max-height="maxHeight"
                v-model="status"
              >
                <template #trigger>
                  <b-button
                    class="sortby-dropdown-btn btn"
                    :label="status"
                    icon-right="menu-down"
                  />
                </template>
                <b-dropdown-item @click="setStatus('active')">
                  <p class="dropdown-item">Active</p>
                </b-dropdown-item>
                <b-dropdown-item @click="setStatus('closed')">
                  <p class="dropdown-item">Closed</p>
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>

        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Details</h4>
            <div class="stroke" />
          </div>
          <div class="section-content">
            <div class="grid-item">
              <p class="detail-heading">Start Date</p>
            </div>
            <div class="grid-item" data-app>
              <v-menu
                ref="menu"
                v-model="menuStart"
                :close-on-content-click="true"
                transition="scale-transition"
                offset-y
                min-width="auto"
                nudge-left="100px"
                nudge-top="100px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="timePeriod.start"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    color="#c21e39"
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="#c21e39"
                  v-model="timePeriod.start"
                  :active-picker.sync="activePicker"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="saveStartDate"
                ></v-date-picker>
              </v-menu>
            </div>

            <div class="grid-item">
              <p class="detail-heading">End Date</p>
            </div>
            <div class="grid-item" data-app>
              <v-menu
                ref="menu"
                v-model="menuEnd"
                :close-on-content-click="true"
                transition="scale-transition"
                offset-y
                min-width="auto"
                nudge-left="100px"
                nudge-top="100px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="timePeriod.end"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    color="#c21e39"
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="#c21e39"
                  v-model="timePeriod.end"
                  :active-picker.sync="activePicker"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="saveEndDate"
                ></v-date-picker>
              </v-menu>
            </div>
            <div class="grid-item">
              <p class="detail-heading">Amount</p>
            </div>
            <div class="grid-item">
              <b-field>
                <b-select
                  placeholder="Currency Type"
                  v-model="offeredAmount.currencyType"
                >
                  <option
                    v-for="currency in getCurrencies"
                    :key="currency.code"
                    :value="currency.symbol"
                  >
                    {{ currency.symbol }}
                  </option>
                </b-select>
              </b-field>
              <b-field>
                <b-numberinput
                  v-model="offeredAmount.start"
                  type="is-danger"
                ></b-numberinput>
              </b-field>
              <b-field>
                <b-numberinput
                  v-model="offeredAmount.end"
                  type="is-danger"
                ></b-numberinput>
              </b-field>
            </div>
          </div>
        </div>
        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Requirements</h4>
            <div class="stroke" />
          </div>
          <b-field>
            <b-taginput
              v-model="requirements"
              :data="filteredTags"
              autocomplete
              :allow-new="false"
              :open-on-focus="true"
              @typing="getFilteredTags"
            >
            </b-taginput>
          </b-field>
        </div>
        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Description</h4>
            <div class="stroke" />
          </div>
          <v-textarea color="#c21e39" v-model="description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from "../../components/AppBar";
import BackButton from "../../components/BackButton";
import skills from "../../assets/skills";
import currencies from "../../assets/currencies";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      menuStart: false,
      menuEnd: false,
      activePicker: null,
      isScrollable: true,
      maxHeight: 300,
      title: "",
      description: "",
      status: "Active",
      requirements: [],
      filteredTags: skills,
      offeredAmount: {
        currencyType: "",
        start: null,
        end: null,
      },
      timePeriod: {
        start: "",
        end: "",
      },
    };
  },
  components: {
    AppBar,
    BackButton,
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
    allSkills: () => skills,
    getCurrencies: () => currencies,
  },
  methods: {
    ...mapActions(["postProject", "showNotificationMessage"]),
    getFilteredTags(text) {
      this.filteredTags = this.allSkills.filter((option) => {
        return option.toString().toLowerCase().indexOf(text.toLowerCase()) >= 0;
      });
    },
    saveStartDate(date) {
      this.$refs.menu.save(date);
    },
    saveEndDate(date) {
      this.$refs.menu.save(date);
    },
    setStatus(option) {
      this.status = option;
    },
    cancelPost() {
      this.$router.push("/profile");
    },
    validate() {
      if (
        this.title === "" ||
        this.description === "" ||
        this.status === "" ||
        this.requirements.length === 0 ||
        this.offeredAmount.currencyType === "" ||
        this.offeredAmount.start === null ||
        this.offeredAmount.end === null ||
        this.timePeriod.start === "" ||
        this.timePeriod.end === ""
      ) {
        return false;
      } else {
        return true;
      }
    },
    saveProject() {
      if (this.validate()) {
        const postObj = {
          uid: this.getCurrentUser.uid,
          title: this.title,
          description: this.description,
          status: this.status,
          requirements: this.requirements,
          offeredAmount: this.offeredAmount,
          timePeriod: this.timePeriod,
          location: this.getCurrentUser.contact.location,
          applicants: [],
        };
        this.postProject({ postObj });
        this.cancelPost();
        return;
      }
      this.showNotificationMessage("Please fill all the details.");
    },
  },
};
</script>

<style scoped>
.root {
  min-height: 100vh;
  padding-bottom: 1.5rem;
}
.content {
  max-width: 95%;
  margin: auto;
}
.projects-card {
  background-color: #ffffff;
  border-radius: 3px;
  margin: auto;
  margin-top: 2rem;
  max-width: 900px;
  padding: 2rem;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  color: #c21e39;
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
.apply-btn {
  margin-right: 1rem;
  width: 7rem;
}
.client-btn {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 7rem;
}
.card-section {
  margin: 2rem 0;
}
.section-content {
  display: grid;
  grid-template-columns: auto auto;
}
.grid-item {
  margin: 0.3rem 0;
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
.detail-info {
  color: #5d5755;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
}
.applicants {
  max-height: 500px;
  overflow-y: auto;
}
.applicants::-webkit-scrollbar {
  width: 1.5rem;
}
.applicants::-webkit-scrollbar-thumb {
  background-color: #e5ecee;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
.sortby-dropdown-btn {
  background-color: #ffffff;
  border: 1px solid #cdcdcd;
  border-radius: 5rem;
  color: #5d5755;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 700;
  min-width: 6rem;
  outline: none;
  padding: 0.4rem 1rem;
  text-transform: capitalize;
}
.sortby-dropdown-btn:focus {
  background-color: #fcfcfc;
}
.dropdown-item {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 500;
}
@media only screen and (max-width: 960px) {
  .projects-card {
    padding: 1rem;
  }
  .header {
    flex-direction: column;
  }
  .actions {
    margin: 1rem 0;
  }
}
</style>