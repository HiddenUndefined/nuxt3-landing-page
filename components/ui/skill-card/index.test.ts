// Vue
import { mount } from '@vue/test-utils'
// Vitest
import { describe, test, expect } from 'vitest'
// Component
import Component from './index.vue'

// Default props
const defaultProps = {
  image: '/images/skills/red.png',
  title: 'Props title',
  text: 'Props text'
}

describe('component: ui-skill-card.vue', () => {
  // Render
  test('correct render', () => {
    // Mount element
    const btn = mount(Component, {
      props: {
        image: defaultProps.image,
        title: defaultProps.title,
        text: defaultProps.text
      }
    })
    // Detect component as html element
    expect(btn.element.tagName.toLowerCase()).toEqual("div")
    // Detect component class
    expect(btn.element.classList.contains('skill-card')).toEqual(true)

    // Find image and check src
    const img = btn.find('img').element
    expect(img.getAttribute('src')).toEqual(defaultProps.image)

    // Find title and check text
    const title = btn.find('h3').element
    expect(title.textContent).toEqual(defaultProps.title)

    // Find text and check text
    const text = btn.find('p').element
    expect(text.textContent).toEqual(defaultProps.text)
  })
})
