import { mount } from '@vue/test-utils'
import WizardWelcome from '@/components/wizard/welcome.vue'

describe('WizardWelcome', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(WizardWelcome)
    expect(wrapper.vm).toBeTruthy()
  })
})
