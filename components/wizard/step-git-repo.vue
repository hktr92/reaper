<template>
  <div class="d-flex flex-grow-1 text-center justify-content-center flex-row">
    <div class="welcome-window align-self-center">
      <b-card title="Git repository creation">
        <b-card-text>
          Do you want to synchronize your passwords using git?
        </b-card-text>

        <div class="mt-4">
          <b-btn variant="outline-danger">
            Cancel
          </b-btn>

          <b-btn variant="primary">
            Next step
          </b-btn>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'StepGitRepo'
})
</script>
