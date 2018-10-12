import { getComponentWrapper } from './utils.js'

describe('VueInlineTextEditor formatting tests', () => {

  it('formats us dollars', () => {
    const wrapper = getComponentWrapper({
        type: 'currency',
        value: 1234.56
    })
    expect(wrapper.find('span').text()).toBe('$1,234.56')

    wrapper.find('span').trigger('click')

    wrapper.find('input').setValue('23.45')

    wrapper.find('button.confirm').trigger('click')
    expect(wrapper.find('span').text()).toBe('$23.45')
  })

  it('changes the currency symbol', () => {
    const wrapper = getComponentWrapper({
        type: 'currency',
        value: 1234.56,
        'currency-symbol': '£'
    })
    expect(wrapper.find('span').text()).toBe('£1,234.56')

    wrapper.find('span').trigger('click')

    wrapper.find('input').setValue('23.45')

    wrapper.find('button.confirm').trigger('click')
    expect(wrapper.find('span').text()).toBe('£23.45')
  })

  it('limits the decimal places', () => {
    const wrapper = getComponentWrapper({
        type: 'currency',
        value: 1234.22,
        'currency-decimal-places': 0
    })
    expect(wrapper.find('span').text()).toBe('$1,234')

    wrapper.find('span').trigger('click')

    wrapper.find('input').setValue('23.45')

    wrapper.find('button.confirm').trigger('click')
    expect(wrapper.find('span').text()).toBe('$23')
  })

  it('formats percentages', () => {
    const wrapper = getComponentWrapper({
        type: 'percentage',
        value: 12.34
    })
    expect(wrapper.find('span').text()).toBe('12.34%')

    wrapper.find('span').trigger('click')

    wrapper.find('input').setValue('23.45')

    wrapper.find('button.confirm').trigger('click')
    expect(wrapper.find('span').text()).toBe('23.45%')
  })

})