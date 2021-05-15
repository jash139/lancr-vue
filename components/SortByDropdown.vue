<template>
  <div class="dropdown">
    <button @click="toggleMenu()" class="dropdown-btn btn">
      Dropdown
      <svg
        width="10"
        height="10"
        viewBox="0 0 25 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.05362 3.63029C0.738528 3.27624 0.564453 2.8188 0.564453 2.34484V2.34484C0.564452 0.589392 2.71518 -0.257682 3.91227 1.02629L12.5645 10.3065L21.2166 1.02629C22.4137 -0.257682 24.5645 0.589391 24.5645 2.34484V2.34484C24.5645 2.8188 24.3904 3.27624 24.0753 3.63029L13.3115 15.7251C12.9137 16.1721 12.2152 16.172 11.8174 15.7251L1.05362 3.63029Z"
          fill="#5D5755"
        />
      </svg>
    </button>
    <div id="myDropdown" class="dropdown-content card-shadow">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortByDropdown",
  methods: {
    toggleMenu: () => {
      document.getElementById("myDropdown").classList.toggle("show");
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.onclick = (event) => {
        if (!event.target.matches(".dropdown-btn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
    });
  },
};
</script>

<style scoped>
.dropdown-btn {
  border: 1px solid #5d5755;
  border-radius: 5rem;
  color: #5d5755;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  outline: none;
  padding: 0.4rem 1rem;
  text-transform: none;
}
.dropdown-btn:focus {
  background-color: #2980b9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  background-color: #ffffff;
  border-radius: 3px;
  display: none;
  min-width: 160px;
  overflow: auto;
  position: absolute;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>