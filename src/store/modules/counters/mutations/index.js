import { MUTATION_INCREASE_COUNTER } from './constants'

export default {
  [MUTATION_INCREASE_COUNTER](store, { counter, value }) {
    store[counter] += value
  }
}
