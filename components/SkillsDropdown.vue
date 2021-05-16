<template>
  <b-dropdown :scrollable="isScrollable" :max-height="maxHeight">
    <template #trigger>
      <b-button
        class="skills-dropdown-btn btn"
        :label="'Skills (' + selectedOptions.length + ')'"
        icon-right="menu-down"
      />
    </template>

    <b-dropdown-item
      v-for="option in options"
      :key="option"
      @click="setSelectedOption(option)"
      :class="
        selectedOptions.includes(option)
          ? 'dropdown-item item-selected'
          : 'dropdown-item'
      "
    >
      <p>{{ option }}</p>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import skills from "../assets/skills";

export default {
  name: "SkillsDropdown",
  data() {
    return {
      isScrollable: true,
      maxHeight: 300,
      options: [],
      selectedOptions: [],
    };
  },
  methods: {
    setSelectedOption(option) {
      if (this.selectedOptions.includes(option)) {
        this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1);
      } else {
        this.selectedOptions.push(option);
      }
    },
  },
  created() {
    this.options = skills;
  },
};
</script>

<style scoped>
.skills-dropdown-btn {
  background-color: #ffffff;
  border: 1px solid #cdcdcd;
  border-radius: 5rem;
  color: #5d5755;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 700;
  outline: none;
  padding: 0.4rem 1rem;
  text-transform: none;
}
.skills-dropdown-btn:focus {
  background-color: #fcfcfc;
}
.dropdown-item {
  color: #5d5755;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
}
.item-selected {
  background-color: #ececec;
}
</style>