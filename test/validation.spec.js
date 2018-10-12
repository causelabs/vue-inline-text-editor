import { getComponentWrapper } from './utils.js'

describe('VueInlineTextEditor validation tests', () => {

  it('requires a value in order to close if required attribute is true', () => {
    const wrapper = getComponentWrapper({ 'required': true })

    // open the control
    wrapper.find('span').trigger('click')

    wrapper.find('input').setValue('')

    wrapper.find('button.confirm').trigger('click')

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.vm.$data.textValidationErrors).toContain('This value is required')
    expect(wrapper.vm.$data.editingValue).not.toBeNull()
  })

  it('allows closing with a value if required attribute is true', () => {
    const wrapper = getComponentWrapper({ 'required': true })

    // open the control
    wrapper.find('span').trigger('click')

    wrapper.find('input').setValue('new value')

    wrapper.find('button.confirm').trigger('click')

    expect(wrapper.find('input').exists()).toBe(false)
    expect(wrapper.vm.$data.textValidationErrors).toHaveLength(0)
    expect(wrapper.vm.$data.editingValue).toBeNull()
  })

  it('allows closing with no value if required attribute is false', () => {
    const wrapper = getComponentWrapper({ 'required': false })

    // open the control
    wrapper.find('span').trigger('click')

    wrapper.find('input').setValue('')

    wrapper.find('button.confirm').trigger('click')

    expect(wrapper.find('input').exists()).toBe(false)
    expect(wrapper.vm.$data.textValidationErrors).toHaveLength(0)
    expect(wrapper.vm.$data.editingValue).toBeNull()
  })

  it('enforces the minlength attribute', () => {
    const wrapper = getComponentWrapper({ 'minLength': 3 })

    // open the control
    wrapper.find('span').trigger('click')

    wrapper.find('input').setValue('ab')

    wrapper.find('button.confirm').trigger('click')

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.vm.$data.textValidationErrors).toContain('Must be at least 3 characters')
    expect(wrapper.vm.$data.editingValue).not.toBeNull()
  })

  it('enforces the maxlength attribute', () => {
    const wrapper = getComponentWrapper({ 'maxLength': 8 })

    // open the control
    wrapper.find('span').trigger('click')

    wrapper.find('input').setValue('abcdefghijkl')

    wrapper.find('button.confirm').trigger('click')

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.vm.$data.textValidationErrors).toContain('Max 8 characters allowed')
    expect(wrapper.vm.$data.editingValue).not.toBeNull()
  })

})