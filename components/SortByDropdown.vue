<template>
  <div class="sort-by-dropdown">
    <p class="sortby">Sort By</p>
    <b-dropdown
      :scrollable="isScrollable"
      :max-height="maxHeight"
      v-model="selectedOption"
    >
      <template #trigger>
        <b-button
          class="sortby-dropdown-btn btn"
          :label="selectedOption"
          icon-right="menu-down"
        />
      </template>
      <b-dropdown-item @click="setSelectedOption('none')">
        <p class="dropdown-item">None</p>
      </b-dropdown-item>
      <b-dropdown-item @click="setSelectedOption('active')">
        <p class="dropdown-item">Active</p>
      </b-dropdown-item>
      <b-dropdown-item @click="setSelectedOption('closed')">
        <p class="dropdown-item">Closed</p>
      </b-dropdown-item>
      <b-dropdown-item @click="setSelectedOption('recent')">
        <p class="dropdown-item">Recent</p>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "SortByDropdown",
  data() {
    return {
      isScrollable: true,
      maxHeight: 300,
      selectedOption: "None",
    };
  },
  methods: {
    setSelectedOption(option) {
      this.$emit("set-sort-type", option);
      this.selectedOption = option.charAt(0).toUpperCase() + option.slice(1); // capitalizing first letter of option
    },
  },
};
</script>

<style scoped>
.sort-by-dropdown {
  display: flex;
  align-items: center;
}
.sortby {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 0.5rem;
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
  text-transform: none;
}
.sortby-dropdown-btn:focus {
  background-color: #fcfcfc;
}
.dropdown-item {
  color: #5d5755;
  font-size: 0.9rem;
  font-weight: 500;
}
@media only screen and (max-width: 1100px) {
  .sort-by-dropdown {
    margin: 2rem 0 1rem;
  }
}
</style>