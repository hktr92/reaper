<template>
  <div class="d-flex flex-grow-1 text-center justify-content-center flex-row">
    <div class="welcome-window align-self-center">
      <b-card title="GPG Configuration">
        <b-card-text>
          Ripasso uses PGP to encrypt your stored passwords.<br>
          We retrieved the list of your PGP keys, so choose one.
        </b-card-text>

        <b-form-select v-model="selected" :options="options" />

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
  name: 'StepPgpId',
  data (): any {
    return {
      selected: null,
      options: [
        { value: 'AD0C1D9C4470D1031F1E763FB580BD1158FE4A1D', text: 'rsa4096/B580BD1158FE4A1D (szemereczkipetru@gmail.com)' }
      ]
    }
  }
})
</script>

<style scoped>

</style>
