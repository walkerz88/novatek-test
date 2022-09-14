import { MUTATION_INCREASE_COUNTER, MUTATION_DROP_COUNTER } from './constants'

export default {
  [MUTATION_INCREASE_COUNTER](store, { counter, value }) {
    store[counter] += value
  },
  [MUTATION_DROP_COUNTER](store, { counter }) {
    store[counter] = 0
  }
}
