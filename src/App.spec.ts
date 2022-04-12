import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App init', () => {
  it('should app initializing', function () {
    const wrapper = mount(App)

    expect(wrapper.find('h1').text()).toEqual('good')
  })
})
