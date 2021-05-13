<template>
  <div class="profile-tabs">
    <div class="tab">
      <button class="tablinks active" @click="changeTab($event, 'London')">
        London
      </button>
      <button class="tablinks" @click="changeTab($event, 'Paris')">
        Paris
      </button>
      <button class="tablinks" @click="changeTab($event, 'Tokyo')">
        Tokyo
      </button>
    </div>

    <div id="London" class="tabcontent activetab">
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>

    <div id="Paris" class="tabcontent">
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="Tokyo" class="tabcontent">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTabs",
  methods: {
    changeTab: (evt, cityName) => {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    },
  },
};
</script>

<style scoped>
.tab {
  overflow: hidden;
}

.tab button {
  background-color: transparent;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  transition: all 0.3s ease;
}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
  border-bottom: 2px solid red;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border-top: none;
}
.activetab {
  display: block;
}
</style>