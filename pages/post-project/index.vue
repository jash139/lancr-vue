<template>
  <div class="root">
    <AppBar />
    <div class="content">
      <BackButton />
      <div class="projects-card card-shadow">
        <div class="header">
          <h2 class="title">By Robert</h2>
          <div class="actions">
            <button
              class="apply-btn btn primary-btn btn-shadow"
              @click="postProject"
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
            <div class="grid-item">
              <p class="detail-info">13-13-2001</p>
            </div>
            <div class="grid-item">
              <p class="detail-heading">End Date</p>
            </div>
            <div class="grid-item">
              <p class="detail-info">13-13-2001</p>
            </div>
            <div class="grid-item">
              <p class="detail-heading">Amount</p>
            </div>
            <div class="grid-item">
              <p class="detail-info">$100 - 200</p>
            </div>
          </div>
        </div>
        <div class="card-section">
          <div class="heading-div">
            <h4 class="heading">Requirements</h4>
            <div class="stroke" />
          </div>
          <v-select
            v-model="requirements"
            :items="allSkills"
            attach
            chips
            multiple
            color="#c21e39"
          ></v-select>
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isScrollable: true,
      maxHeight: 300,
      uid: "",
      title: "",
      description: "",
      status: "Active",
      requirements: [],
      offeredAmount: {
        currencyType: "",
        start: "",
        end: "",
      },
      timePeriod: {
        start: "",
        end: "",
      },
      location: {
        country: "",
        state: "",
        city: "",
      },
    };
  },
  components: {
    AppBar,
    BackButton,
  },
  computed: {
    // ...mapGetters(["getCurrentUser"]),
    allSkills: () => skills,
  },
  methods: {
    ...mapActions(["postProject", "showNotificationMessage"]),
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
        this.offeredAmount.start === "" ||
        this.offeredAmount.end === "" ||
        this.timePeriod.start === "" ||
        this.timePeriod.end === ""
      ) {
        return false;
      } else {
        return true;
      }
    },
    postProject() {
      const postObj = {
        uid: this.uid,
        title: this.title,
        description: this.description,
        status: this.status,
        requirements: this.requirements,
        offeredAmount: this.offeredAmount,
        timePeriod: this.timePeriod,
        location: this.location,
        applicants: [],
      };
      //   if (this.validate()) {
      //     this.postProject({ postObj });
      //     this.cancelPost();
      //     return;
      //   }
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