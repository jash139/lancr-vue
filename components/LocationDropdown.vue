<template>
  <div class="location-dropdown">
    <b-dropdown
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
</template>

<script>
import stateCity from "../assets/state-city";

export default {
  name: "LocationDropdown",
  data() {
    return {
      isScrollable: true,
      maxHeight: 300,
      city: "City",
      state: "State",
      states: Object.keys(stateCity),
    };
  },
  computed: {
    cities() {
      return stateCity[this.state];
    },
  },
  methods: {
    setState(state) {
      this.state = state;
    },
    setCity(city) {
      this.city = city;
    },
  },
};
</script>

<style scoped>
.location-dropdown {
  display: flex;
  align-items: center;
  margin-left: 1rem;
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
</style>