import { getComponentWrapper } from './utils.js'

describe('VueInlineTextEditor classes tests', () => {

  it('does not include the hover-effects class if attribute is false', () => {
    const wrapper = getComponentWrapper({ 'hover-effects': false })

    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('hover-effects')
  })

  it('includes the hover-effects class if attribute is true', () => {
    const wrapper = getComponentWrapper({ 'hover-effects': true })

    expect(wrapper.find('div.inline-editor').attributes('class')).toContain('hover-effects')
  })

  it('does not include the disabled class if attribute is false', () => {
    const wrapper = getComponentWrapper({ 'disabled': false })

    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('disabled')
  })

  it('includes the disabled class if attribute is true', () => {
    const wrapper = getComponentWrapper({ 'disabled': true })

    expect(wrapper.find('div.inline-editor').attributes('class')).toContain('disabled')
  })

  it('includes the correct type class', () => {
    let wrapper = getComponentWrapper({})

    expect(wrapper.find('div.inline-editor').attributes('class')).toContain('type-text')
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-currency')
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-number')
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-percentage')

    wrapper = getComponentWrapper({ type: 'currency' })

    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-text')
    expect(wrapper.find('div.inline-editor').attributes('class')).toContain('type-currency')
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-number')
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-percentage')

    wrapper = getComponentWrapper({ type: 'number' })

    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-text')
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-currency')
    expect(wrapper.find('div.inline-editor').attributes('class')).toContain('type-number')
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-percentage')

    wrapper = getComponentWrapper({ type: 'percentage' })
  
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-text')
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-currency')
    expect(wrapper.find('div.inline-editor').attributes('class')).not.toContain('type-number')
    expect(wrapper.find('div.inline-editor').attributes('class')).toContain('type-percentage')
  })

})