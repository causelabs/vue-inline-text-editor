
import { shallowMount } from '@vue/test-utils'
import VueInlineTextEditor from '../src/vue-inline-text-editor.vue'

// helper function that mounts and returns the component
const getComponentWrapper = (customProps = {}, customSlots = {}) => {
    let props = {
        value: 'My Value'
    }
    
    props = Object.assign(props, customProps)
    return shallowMount(VueInlineTextEditor, {
        propsData: props,
        slots: customSlots
    })
}

export { getComponentWrapper }