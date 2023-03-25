// Vue
import { mount } from '@vue/test-utils'
// Vitest
import { describe, test, expect } from 'vitest'
// Component
import Component from './index.vue'

// Default props
const defaultProps = {
  image: '/images/works/6.jpg',
  title: 'Project title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing eldolorit.'
}

describe('component: ui-gallery-card.vue', () => {
  // Render
  test('correct render', () => {
    // Mount element
    const element = mount(Component, {
      props: {
        image: defaultProps.image,
        title: defaultProps.title,
        description: defaultProps.description
      }
    })
    // Detect component as html element
    expect(element.element.tagName.toLowerCase()).toEqual("div")
    // Detect component class
    expect(element.element.classList.contains('gallery-card')).toEqual(true)

    // Find authorImage and check src
    const image = element.find('div.preview').element
    expect(image.getAttribute('style')?.indexOf(`background-image: url("${ defaultProps.image }")`) !== -1).toEqual(true)

    // Find title and check text
    const text = element.find('strong').element
    expect(text.textContent).toEqual(defaultProps.title)

    // Find description and check text
    const description = element.find('p').element
    expect(description.textContent).toEqual(defaultProps.description)
  })
})
