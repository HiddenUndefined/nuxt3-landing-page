// Vue
import { mount } from '@vue/test-utils'
// Vitest
import { describe, test, expect } from 'vitest'
// Component
import Button from './index.vue'

// Default props
const defaultProps = {
  name: 'submit',
  disabled: true
}

describe('component: ui-button.vue', () => {
  // Render
  test('correct render', () => {
    // Mount element
    const btn = mount(Button)
    // Detect button as html element
    expect(btn.element.tagName.toLowerCase()).toEqual("button")
    expect(btn.element.classList.contains('ui-button')).toEqual(true)
  })

  // Attributes

  // Name #1
  test('renders button with name attribute', () => {
    // Mount element with attr
    const btn = mount(Button, {
      props: {
        name: defaultProps.name
      }
    })
    // Check attr
    expect(btn.attributes()).toEqual(
      expect.objectContaining({ name: defaultProps.name })
    )
  })

  // Disabled #1: true
  test('renders button with disabled attribute', () => {
    // Mount element with attr
    const btn = mount(Button, {
      props: {
        disabled: true
      }
    })
    // Check attr
    expect(btn.attributes()).toEqual(
      expect.objectContaining({ disabled: '' })
    )
  })
  // Disabled #2: false
  test('renders button without disabled attribute', () => {
    // Mount element with attr
    const btn = mount(Button, {
      props: {
        disabled: false
      }
    })
    // Check attr
    expect(btn.attributes()).not.toEqual(
      expect.objectContaining({ disabled: '' })
    )
  })
})
