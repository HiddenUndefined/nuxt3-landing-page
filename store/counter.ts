import { defineStore } from 'pinia'
import { ICounter } from '~/store/counter.model'

const useCounterStore = defineStore({
  id: 'counter',
  state: (): ICounter => ({
    counter: 0
  }),
  getters: {
    getCounter: (state: ICounter): Number => state.counter
  },
  actions: {
    // Increment
    increment (value?: number): void {
      this.counter += value || 1
    },
    // Decrement
    decrement (value?: number): void {
      this.counter -= value || 1
    },
    // Counter reset
    resetCounter (): void {
      this.counter = 0
    }
  }
})

export default useCounterStore
