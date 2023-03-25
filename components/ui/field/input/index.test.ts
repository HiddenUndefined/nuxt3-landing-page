// Vue
import { mount } from '@vue/test-utils'
// Vitest
import { describe, test, expect } from 'vitest'
// Component
import Input from './index.vue'

// Default props
const defaultProps = {
  id: 'fieldIdentifier',
  name: 'field-name',
  label: 'Field label',
  modelValue: 'field value #348',
  placeholder: 'Field placeholder',
  disabled: true,
  required: true
}

describe('component: ui-field-input.vue', () => {
  // Render
  test('correct render with default props', () => {
    // Mount element
    const component = mount(Input, {
      props: defaultProps
    })
    // Detect button as html element
    expect(component.element.tagName.toLowerCase()).toEqual("input")
    expect(component.element.classList.contains('ui-field')).toEqual(true)
    // Check props
    expect(component.props()).toEqual(
      expect.objectContaining({
        id: defaultProps.id,
        label: defaultProps.label,
        modelValue: defaultProps.modelValue,
        name: defaultProps.name,
        disabled: defaultProps.disabled
      })
    )
    // Check attributes
    expect(component.attributes()).toContain({
      id: defaultProps.id,
      name: defaultProps.name,
      placeholder: defaultProps.placeholder
    })
  })

  // Work with value
  test('update «modelValue»', async () => {
    // Mount element
    const component = mount(Input, {
      props: {
        ...defaultProps,
        "onUpdate:modelValue": (e: any) => component.setProps({ modelValue: e })
      }
    })
    // Work with value
    const newValue = defaultProps.modelValue + ': new'

    expect(component.props('modelValue')).toEqual(defaultProps.modelValue)
    await component.setValue(newValue)
    expect(component.props('modelValue')).toEqual(newValue)
  })
})
