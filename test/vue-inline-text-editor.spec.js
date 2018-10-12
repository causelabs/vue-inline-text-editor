import { getComponentWrapper } from './utils.js'

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

  it('displays an edit icon if provided', () => {
    const wrapper = getComponentWrapper({}, {
        'edit-label': '<span class="fa fa-pen"></span>'
    })

    expect(wrapper.find('span.fa').exists()).toBe(true)
  })

  it('displays an edit icon if provided', () => {
    const wrapper = getComponentWrapper({}, {
        'edit-label': '<span class="fa fa-pen"></span>'
    })

    expect(wrapper.find('span.fa').exists()).toBe(true)
  })

  it('displays an custom save and cancel icons if provided', () => {
    const wrapper = getComponentWrapper({}, {
        'confirm-label': '<span class="fa fa-ban"></span>',
        'cancel-label': '<span class="fa fa-save"></span>'
    })

    // open the control
    wrapper.find('span').trigger('click')

    expect(wrapper.find('span.fa-ban').exists()).toBe(true)
    expect(wrapper.find('span.fa-save').exists()).toBe(true)
  })

  it('includes the hover-effects class if enabled', () => {
    const wrapper = getComponentWrapper({ 'hover-effects': true })

    expect(wrapper.find('div.inline-editor').attributes('class')).toContain('hover-effects')
  })

  it('closes on blur if enabled', () => {
    const wrapper = getComponentWrapper({ 'close-on-blur': true })
    expect(wrapper.vm.$data.editingValue).toBeNull()

    // open the control
    wrapper.find('span').trigger('click')
    expect(wrapper.vm.$data.editingValue).not.toBeNull()
    expect(wrapper.find('input').exists()).toBe(true)

    // blur
    wrapper.find('input').trigger('blur')
    expect(wrapper.vm.$data.editingValue).toBeNull()
    expect(wrapper.find('input').exists()).toBe(false)
  })

});