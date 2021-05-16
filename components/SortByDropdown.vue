<template>
  <div class="sort-by-dropdown">
    <p class="sortby">Sort By</p>
    <div class="dropdown">
      <button @click="toggleMenu" class="sortby-dropdown-btn btn">
        {{ selectedOption }}
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
      <div v-show="showOptions" class="dropdown-content card-shadow">
        <p class="dropdown-item" @click="setSelectedOption('None')">None</p>
        <p class="dropdown-item" @click="setSelectedOption('Active')">Active</p>
        <p class="dropdown-item" @click="setSelectedOption('Closed')">Closed</p>
        <p class="dropdown-item" @click="setSelectedOption('Recent')">Recent</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortByDropdown",
  data() {
    return {
      selectedOption: "None",
      showOptions: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showOptions = !this.showOptions;
    },
    setSelectedOption(option) {
      this.selectedOption = option;
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.onclick = (event) => {
        if (!event.target.matches(".sortby-dropdown-btn")) {
          this.showOptions = false;
        }
      };
    });
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
.dropdown {
  position: relative;
  display: inline-block;
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
.drop-icon {
  margin-left: 0.5rem;
}
.sortby-dropdown-btn:focus {
  background-color: #fcfcfc;
}
.dropdown-content {
  background-color: #ffffff;
  border-radius: 3px;
  min-width: 150px;
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
.dropdown-item:hover {
  background-color: #ececec;
}
</style>