import { mount } from '@vue/test-utils'
import WizardStepPgpId from '@/components/wizard/step-pgp-id.vue'

describe('WizardStepPgpId', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(WizardStepPgpId)
    expect(wrapper.vm).toBeTruthy()
  })
})
