import { ACTION_INCREASE_COUNTER, ACTION_DROP_COUNTER } from './constants'
import {
  MUTATION_INCREASE_COUNTER,
  MUTATION_DROP_COUNTER
} from '../mutations/constants'

export default {
  [ACTION_INCREASE_COUNTER]({ commit, state }, payload) {
    commit(MUTATION_INCREASE_COUNTER, { ...state, ...payload })
  },
  [ACTION_DROP_COUNTER]({ commit, state }, counter) {
    commit(MUTATION_DROP_COUNTER, { ...state, counter })
  }
}
