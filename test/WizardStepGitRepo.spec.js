import { mount } from '@vue/test-utils'
import WizardStepGitRepo from '@/components/wizard/step-git-repo.vue'

describe('WizardStepGitRepo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(WizardStepGitRepo)
    expect(wrapper.vm).toBeTruthy()
  })
})
