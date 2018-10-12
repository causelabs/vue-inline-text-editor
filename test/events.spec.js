import { getComponentWrapper } from './utils.js'

describe('VueInlineTextEditor events tests', () => {

  it('triggers the open event when clicked', () => {
    const wrapper = getComponentWrapper()
    expect(wrapper.emitted().open).toBeFalsy()

    // open the control
    wrapper.find('span').trigger('click')

    expect(wrapper.emitted().open).toBeTruthy()
  })

  it('triggers the close event when canceled', () => {
    const wrapper = getComponentWrapper()
    expect(wrapper.emitted().close).toBeFalsy()

    // open the control
    wrapper.find('span').trigger('click')
    // cancel the change
    wrapper.find('button.cancel').trigger('click')

    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('triggers the close event when saved', () => {
    const wrapper = getComponentWrapper()
    expect(wrapper.emitted().close).toBeFalsy()

    // open the control
    wrapper.find('span').trigger('click')
    // save the change
    wrapper.find('button.confirm').trigger('click')

    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('triggers the blur event when focus is lost', () => {
    const wrapper = getComponentWrapper()
    expect(wrapper.emitted().blur).toBeFalsy()

    // open the control
    wrapper.find('span').trigger('click')
    // blur the field
    wrapper.find('input').trigger('blur')

    expect(wrapper.emitted().blur).toBeTruthy()
  })

  it('triggers the change event on change', () => {
    const wrapper = getComponentWrapper()
    expect(wrapper.emitted().change).toBeFalsy()

    // open the control
    wrapper.find('span').trigger('click')
    wrapper.find('input').trigger('change')

    expect(wrapper.emitted().change).toBeTruthy()
  })

  it('triggers the update event when saved', () => {
    const wrapper = getComponentWrapper()
    expect(wrapper.emitted().close).toBeFalsy()

    // open the control
    wrapper.find('span').trigger('click')
    // save the change
    wrapper.find('button.confirm').trigger('click')

    expect(wrapper.emitted().close).toBeTruthy()
  })

})