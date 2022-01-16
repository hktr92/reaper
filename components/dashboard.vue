<template>
  <div class="container">
    <b-card class="mt-4" title="Passwords">
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
      >
        <template #cell(actions)="data">
          <b-btn-group>
            <b-btn
              v-b-tooltip
              size="sm"
              variant="primary"
              title="Copy password to clipboard"
              @click="copyToClipboard(data.item)"
            >
              <fa :icon="['far','copy']" />
            </b-btn>
            <b-btn
              v-b-tooltip
              size="sm"
              variant="warning"
              title="View password"
              @click="viewPassword(data.item)"
            >
              <fa :icon="['fas','eye']" />
            </b-btn>
            <b-btn
              v-b-tooltip
              size="sm"
              variant="danger"
              title="Delete this password"
              @click="deletePassword(data.item)"
            >
              <fa :icon="['fas','times']" />
            </b-btn>
          </b-btn-group>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BvTableFieldArray } from 'bootstrap-vue'

interface StoredPassword {
  label: string,
  author: string,
  addedAt: string
}

interface DashboardData {
  items: StoredPassword[]
  fields: BvTableFieldArray
}

export default Vue.extend({
  name: 'Dashboard',
  data (): DashboardData {
    return {
      items: [
        {
          label: 'test/test',
          author: 'Petru Szemereczki',
          addedAt: '2022-01-01'
        }
      ],
      fields: [
        { key: 'label', sortable: true },
        { key: 'author', sortable: true },
        {
          key: 'addedAt',
          label: 'Added At',
          sortable: true
        },
        'actions'
      ]
    }
  },
  methods: {
    copyToClipboard (item: StoredPassword): void {
      console.log(item)
    },
    viewPassword (item: StoredPassword): void {
      console.log(item)
    },
    deletePassword (item: StoredPassword): void {
      console.log(item)
    }
  }
})
</script>
