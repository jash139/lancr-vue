<template>
  <div class="dropdown">
    <button @click="toggleMenu()" class="dropdown-btn btn">Dropdown</button>
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
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.dropdown-btn:focus {
  background-color: #2980b9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
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