// Vitest
import { beforeEach, describe, test, expect } from 'vitest'
// Pinia
import { setActivePinia, createPinia } from 'pinia'
// Store
import useCounterStore from './counter'
import { ICounter } from '~/store/counter.model'

/**
 * Data
 */
const defaultStateValue: ICounter = {
  counter: 0
}

/**
 * Describe
 */
describe('store: counter.ts', () => {
  /**
   * Init store
   */
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  /**
   * Getters
   */
  // Get Counter
  test('getter: get counter', () => {
    // Store
    const counterStore = useCounterStore()
    // Do getter
    const getter = counterStore.getCounter
    // Check with default value
    expect(counterStore.counter).toBe(getter)
  })

  /**
   * Actions
   */
  // Increment
  // # Without value
  test('action: increment without value', () => {
    // Store
    const counterStore = useCounterStore()
    // Default value
    expect(counterStore.counter).toBe(defaultStateValue.counter)
    // Do increment
    counterStore.increment()
    // Do action logic
    expect(counterStore.counter).toBe(1)
  })
  // # Without value
  test('action: increment with value', () => {
    // Store
    const counterStore = useCounterStore()
    // Default value
    expect(counterStore.counter).toBe(defaultStateValue.counter)
    // Do increment
    counterStore.increment(10)
    // Do action logic
    expect(counterStore.counter).toBe(10)
  })

  // Decrement
  // # Without value
  test('action: decrement without value', () => {
    // Store
    const counterStore = useCounterStore()
    // Default value
    expect(counterStore.counter).toBe(defaultStateValue.counter)
    // Do decrement
    counterStore.decrement()
    // Do action logic
    expect(counterStore.counter).toBe(-1)
  })
  // # Without value
  test('action: decrement with value', () => {
    // Store
    const counterStore = useCounterStore()
    // Default value
    expect(counterStore.counter).toBe(defaultStateValue.counter)
    // Do decrement
    counterStore.decrement(10)
    // Do action logic
    expect(counterStore.counter).toBe(-10)
  })

  // Reset
  test('action: reset counter value', () => {
    // Store
    const counterStore = useCounterStore()
    // Default value
    expect(counterStore.counter).toBe(defaultStateValue.counter)
    // Do decrement
    counterStore.decrement()
    // Do action logic
    expect(counterStore.counter).toBe(-1)
    // Do decrement
    counterStore.resetCounter()
    // Do action logic
    expect(counterStore.counter).toBe(defaultStateValue.counter)
  })
})
