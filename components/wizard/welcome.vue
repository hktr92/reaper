<template>
  <div class="d-flex flex-grow-1 text-center justify-content-center flex-row">
    <div class="welcome-window align-self-center">
      <b-card title="Reaper Setup">
        <b-card-text>
          Welcome to Reaper!<br>
          It seems like you don't have a password store directory yet.<br><br>
          It will be created at the following path:<br>
          <code>/home/foo/.password-store</code><br><br>
          Would you like to create it?
        </b-card-text>

        <div class="">
          <b-btn variant="outline-danger">
            Cancel
          </b-btn>

          <b-btn variant="primary">
            Yes
          </b-btn>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WizardWelcome'
})
</script>
