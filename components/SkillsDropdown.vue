<template>
  <div class="dropdown">
    <button class="skills-dropdown-btn btn">
      Skills ({{ selectedOptions.length }})
      <div class="drop-icon">
        <svg
          width="10"
          height="10"
          viewBox="0 0 25 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.05362 3.63029C0.738528 3.27624 0.564453 2.8188 0.564453 2.34484V2.34484C0.564452 0.589392 2.71518 -0.257682 3.91227 1.02629L12.5645 10.3065L21.2166 1.02629C22.4137 -0.257682 24.5645 0.589391 24.5645 2.34484V2.34484C24.5645 2.8188 24.3904 3.27624 24.0753 3.63029L13.3115 15.7251C12.9137 16.1721 12.2152 16.172 11.8174 15.7251L1.05362 3.63029Z"
            fill="#cdcdcd"
          />
        </svg>
      </div>
    </button>
    <div class="dropdown-content card-shadow">
      <p
        :class="
          selectedOptions.includes(option)
            ? 'dropdown-item item-selected'
            : 'dropdown-item'
        "
        v-for="option in options"
        :key="option"
        @click="setSelectedOption($event, option)"
      >
        {{ option }}
      </p>
    </div>
  </div>
</template>

<script>
import skills from "../assets/skills";

export default {
  name: "SkillsDropdown",
  data() {
    return {
      options: [],
      selectedOptions: [],
    };
  },
  methods: {
    setSelectedOption(event, option) {
      event.stopPropagation();
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
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown:hover .dropdown-content {
  display: block;
}
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
.drop-icon {
  margin-left: 0.5rem;
}
.skills-dropdown-btn:focus {
  background-color: #fcfcfc;
}
.dropdown-content {
  background-color: #ffffff;
  border-radius: 3px;
  display: none;
  max-height: 300px;
  min-width: 160px;
  overflow: auto;
  position: absolute;
  z-index: 1;
}
.dropdown-item {
  color: #5d5755;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.6rem 1rem;
}
.item-selected {
  background-color: #ececec;
}
.dropdown-item:hover {
  background-color: #ececec;
}
</style>