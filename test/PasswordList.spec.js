import { mount } from '@vue/test-utils'
import PasswordList from '@/components/password-list.vue'

describe('PasswordList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PasswordList)
    expect(wrapper.vm).toBeTruthy()
  })
})
