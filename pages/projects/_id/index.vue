<template>
  <div class="projects-card card-shadow">
    <div class="header">
      <h2 class="title">Project Title</h2>
      <div class="actions">
        <button class="apply-btn btn primary-btn btn-shadow">Apply</button>
        <button class="client-btn btn outlined-btn">Doggo Gang</button>
      </div>
    </div>
    <div class="card-section">
      <div class="heading-div">
        <h4 class="heading">Contact</h4>
        <div class="stroke" />
      </div>
      <div class="section-content">
        <div class="grid-item">
          <p class="detail-heading">Phone</p>
        </div>
        <div class="grid-item">
          <p class="detail-info">094 561 2378</p>
        </div>
        <div class="grid-item">
          <p class="detail-heading">Email</p>
        </div>
        <div class="grid-item">
          <p class="detail-info">freelancer@gmail.com</p>
        </div>
      </div>
      <div class="card-section">
        <div class="heading-div">
          <h4 class="heading">Details</h4>
          <div class="stroke" />
        </div>
      </div>
      <div class="card-section">
        <div class="heading-div">
          <h4 class="heading">Description</h4>
          <div class="stroke" />
        </div>
        <p class="detail-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod magna aliqua.
        </p>
      </div>
      <div class="card-section">
        <div class="heading-div">
          <h4 class="heading">Requirements</h4>
          <div class="stroke" />
        </div>
        <Chip text="React" />
        <Chip text="Vue" />
        <Chip text="Redux" />
        <Chip text="Vuex" />
        <Chip text="Nuxtjs" />
        <Chip text="Nextjs" />
        <Chip text="scss" />
        <Chip text="Git" />
        <Chip text="+4" />
      </div>
      <div class="card-section">
        <div class="heading-div">
          <h4 class="heading">Applicants</h4>
          <div class="stroke" />
        </div>
        <div class="applicant-card">Applicant card</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>