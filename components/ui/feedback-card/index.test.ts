// Vue
import { mount } from '@vue/test-utils'
// Vitest
import { describe, test, expect } from 'vitest'
// Component
import Component from './index.vue'

// Default props
const defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis doloribus non vel!',
  authorImage: '/images/feedback/3.png',
  authorName: 'Dave Brown, Netflix'
}

describe('component: ui-feedback-card.vue', () => {
  // Render
  test('correct render', () => {
    // Mount element
    const element = mount(Component, {
      props: {
        text: defaultProps.text,
        authorImage: defaultProps.authorImage,
        authorName: defaultProps.authorName
      }
    })
    // Detect component as html element
    expect(element.element.tagName.toLowerCase()).toEqual("div")
    // Detect component class
    expect(element.element.classList.contains('feedback-card')).toEqual(true)

    // Find text and check text
    const text = element.find('strong').element
    expect(text?.textContent).toEqual(defaultProps.text)

    // Find author wrapper
    const author = element.find('div.author-wrapper')

    // Find authorImage and check src
    const authorImage = author.find('img')
    expect(authorImage.element.getAttribute('src')).toEqual(defaultProps.authorImage)

    // Find authorName and check text
    const authorName = author.find('p')
    expect(authorName.element.textContent).toEqual(defaultProps.authorName)
  })
})
