import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import VueInlineTextEditor from '../src/vue-inline-text-editor.vue'

// helper function that mounts and returns the component
function getComponentWrapper (customProps = {}) {
    let props = {
        value: 'My Value'
    }
    
    props = Object.assign(props, customProps)
    console.log('props', customProps, props)
    return shallowMount(VueInlineTextEditor, {
        propsData: props
    })
}

describe('VueInlineTextEditor test', () => {
  it('displays the initial value', () => {

    const wrapper = getComponentWrapper()
    
    expect(wrapper.vm.$data.internalValue).toBe('My Value')

    expect(wrapper.find('span').text()).toBe('My Value')
    expect(wrapper.findAll('button.icon')).toHaveLength(1)
  })

  it('displays placeholder text when there is no initial value', () => {

    const wrapper = getComponentWrapper({
        value: '',
        placeholder: 'Test placeholder text'
    })

    expect(wrapper.find('span').text()).toBe('Test placeholder text')
  })

  it('displays a text field and buttons when clicked', () => {
    const wrapper = getComponentWrapper()

    wrapper.find('span').trigger('click')

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').element.value).toBe('My Value')
    expect(wrapper.findAll('button.icon')).toHaveLength(2)
  })

  it('does not display a text field when clicked if disabled', () => {
    const wrapper = getComponentWrapper({disabled: true})

    wrapper.find('span').trigger('click')

    expect(wrapper.find('input').exists()).toBe(false)
  })
});