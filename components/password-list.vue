<template>
  <div class="container">
    <b-card class="mt-4">
      <template #header>
        <div class="d-flex justify-content-between">
          <h4 class="card-title">
            Passwords
          </h4>
          <b-btn-group>
            <b-btn
              variant="primary"
              @click="$bvModal.show('add-new-password')"
            >
              <fa icon="plus" />
            </b-btn>
          </b-btn-group>
        </div>
      </template>
      <b-alert
        :show="dismissCountDown"
        :dismissible="false"
        variant="info"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        <p>The password from your clipboard will be removed in {{ dismissCountDown }} seconds...</p>
        <b-progress
          variant="info"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
        />
      </b-alert>

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

    <b-modal id="add-new-password" title="Add new password">
      <b-form
        v-if="showPasswordForm"
        @submit="savePassword"
        @reset="resetPasswordForm"
      >
        <b-form-group
          id="input-group-path"
          label="Path:"
          label-for="input-path"
        >
          <b-form-input
            id="input-path"
            v-model="passwordForm.path"
            type="text"
            placeholder="Password's label"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-password"
          label="Password:"
          label-for="input-password"
        >
          <b-form-input
            id="input-password"
            v-model="passwordForm.password"
            type="password"
            placeholder="Your password"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-notes"
          label="Notes:"
          label-for="input-notes"
        >
          <b-form-textarea
            id="input-notes"
            v-model="passwordForm.note"
            placeholder="Additional notes for this password"
          />
        </b-form-group>
      </b-form>

      <template #modal-footer>
        <b-btn
          variant="default"
          @click="$bvModal.hide('add-new-password')"
        >
          Close
        </b-btn>
        <b-btn
          variant="primary"
          @click="savePassword"
        >
          Save
        </b-btn>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BvTableFieldArray } from 'bootstrap-vue'
import { writeText } from '@tauri-apps/api/clipboard'

interface StoredPassword {
  label: string
  author: string
  addedAt: string
}

interface PasswordForm {
  path: string
  password: string
  note: string
}

interface DashboardData {
  showPasswordForm: boolean
  passwordForm: PasswordForm
  items: StoredPassword[]
  fields: BvTableFieldArray
  dismissSecs: number
  dismissCountDown: number
  showDismissibleAlert: boolean
}

export default Vue.extend({
  name: 'PasswordList',
  data (): DashboardData {
    return {
      showPasswordForm: true,
      passwordForm: {
        path: '',
        password: '',
        note: ''
      },
      dismissSecs: 30,
      dismissCountDown: 0,
      showDismissibleAlert: false,
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
    async copyToClipboard (_item: StoredPassword): Promise<void> {
      await writeText('test')

      this.$toast.success('Password copied to clipboard! Auto-deleting in 30 seconds...')
      this.showAlert()
    },
    viewPassword (item: StoredPassword): void {
      console.log(item)
    },
    async deletePassword (item: StoredPassword): Promise<void> {
      const value = await this.$bvModal.msgBoxConfirm(
        'Are you sure you want to remove this password? It will be gone forever!',
        {
          title: 'Password removal confirmation',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        }
      )

      if (value) {
        const passwordIdx = this.items.findIndex(p => p.label === item.label)
        if (passwordIdx === -1) { return }
        this.items.splice(passwordIdx, 1)
      }
    },
    async countDownChanged (dismissCountDown: number): Promise<void> {
      if (dismissCountDown === 0) {
        await writeText('')
      }

      this.dismissCountDown = dismissCountDown
    },
    showAlert (): void {
      this.dismissCountDown = this.dismissSecs
    },
    savePassword (): void {
      this.showPasswordForm = false

      const password: StoredPassword = {
        label: this.passwordForm.path,
        author: 'Petru Szemereczki',
        addedAt: '2022-01-01'
      }

      this.items.push(password)
      this.$bvModal.hide('add-new-password')
      this.$toast.success('Password saved successfully!')

      this.$nextTick(() => {
        this.passwordForm = {
          path: '',
          password: '',
          note: ''
        }

        this.showPasswordForm = true
      })
    },
    resetPasswordForm (): void {}
  }
})
</script>
