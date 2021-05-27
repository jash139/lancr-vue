<template>
  <div>
    <button
      class="btn primary-btn btn-shadow edit-btn"
      @click="isModalActive = true"
    >
      Edit Details
    </button>
    <b-modal v-model="isModalActive" scroll="keep">
      <div class="edit-modal">
        <div class="modal-header">
          <h2 class="edit-details">Edit Details</h2>
        </div>
        <v-text-field color="#c21e39" v-model="name" label="Name" />
        <v-text-field
          color="#c21e39"
          v-model="profilePicture"
          label="Profile Picture"
        />
        <v-text-field color="#c21e39" v-model="title" label="Title" />
        <v-text-field color="#c21e39" v-model="phone" label="Phone" />
        <v-text-field color="#c21e39" v-model="email" label="email" />
        <div class="location-dropdown">
          <p class="location-heading">Location</p>
          <b-dropdown
            position="is-top-left"
            :scrollable="isScrollable"
            :max-height="maxHeight"
            v-model="state"
          >
            <template #trigger>
              <b-button
                class="location-dropdown-btn btn"
                :label="state"
                icon-right="menu-down"
              />
            </template>

            <b-dropdown-item
              v-for="state in states"
              :key="state"
              @click="setState(state)"
            >
              <p class="dropdown-item">{{ state }}</p>
            </b-dropdown-item>
          </b-dropdown>
          <b-dropdown
            position="is-top-left"
            :scrollable="isScrollable"
            :max-height="maxHeight"
            v-model="city"
          >
            <template #trigger>
              <b-button
                class="location-dropdown-btn btn"
                :label="city"
                icon-right="menu-down"
              />
            </template>

            <b-dropdown-item
              v-for="city in cities"
              :key="city"
              @click="setCity(city)"
            >
              <p class="dropdown-item">{{ city }}</p>
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div data-app>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateOfBirth"
                label="Birthday date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                color="#c21e39"
              ></v-text-field>
            </template>
            <v-date-picker
              color="#c21e39"
              v-model="dateOfBirth"
              :active-picker.sync="activePicker"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </div>
        <div class="card-actions">
          <button class="btn outlined-btn action-btns" @click="handleCancel">
            Cancel
          </button>
          <button class="btn primary-btn action-btns" @click="saveChanges">
            Save
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import stateCity from "../assets/state-city";

export default {
  name: "ProfileEditButton",
  data() {
    return {
      isModalActive: false,
      activePicker: null,
      name: "",
      profilePicture: "",
      title: "",
      phone: "",
      email: "",
      dateOfBirth: null,
      menu: false,
      isScrollable: true,
      maxHeight: 300,
      city: "City",
      state: "State",
      states: Object.keys(stateCity),
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
    cities() {
      return stateCity[this.state];
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    ...mapActions(["patchCurrentUser"]),
    save(date) {
      this.$refs.menu.save(date);
    },
    setState(state) {
      this.state = state;
    },
    setCity(city) {
      this.city = city;
    },
    handleCancel() {
      this.isModalActive = false;
    },
    saveChanges() {
      const patchObj = {
        name: this.name,
        title: this.title,
        profilePicture: this.profilePicture,
        contact: {
          phone: this.phone,
          location: {
            city: this.city,
            state: this.state,
            country: "India",
          },
          email: this.email,
        },
        dateOfBirth: this.dateOfBirth,
      };
      this.patchCurrentUser({ uid: this.getCurrentUser.uid, patchObj });
      this.handleCancel();
    },
  },
  created() {
    this.name = this.getCurrentUser.name;
    this.profilePicture = this.getCurrentUser.profilePicture;
    this.title = this.getCurrentUser.title;
    this.phone = this.getCurrentUser.contact.phone;
    this.email = this.getCurrentUser.contact.email;
    this.dateOfBirth = this.getCurrentUser.dateOfBirth;
    this.city = this.getCurrentUser.contact.location.city;
    this.state = this.getCurrentUser.contact.location.state;
  },
};
</script>

<style scoped>
.edit-btn {
  margin-top: 0.5rem;
}
.edit-modal {
  background-color: #ffffff;
  border-radius: 3px;
  margin: auto;
  width: 600px;
  max-width: 95%;
  padding: 2rem;
}
.edit-details {
  color: #c21e39;
  padding-bottom: 1rem;
}
.location-heading {
  margin-right: 1rem;
}
.location-dropdown {
  display: flex;
  align-items: center;
}
.location-dropdown-btn {
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
  text-transform: none;
}
.location-dropdown-btn:focus {
  background-color: #fcfcfc;
}
.dropdown-item {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 600;
}
.action-btns {
  margin: 0.5rem;
  width: 7rem;
}
@media only screen and (max-width: 1100px) {
  .location-dropdown {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
  }
  .location-dropdown-btn {
    margin: 0;
    margin-top: 0.5rem;
  }
  .dropdown + .dropdown {
    margin-left: 0;
  }
}
@media only screen and (max-width: 960px) {
  .edit-modal {
    padding: 1rem;
  }
}
</style>