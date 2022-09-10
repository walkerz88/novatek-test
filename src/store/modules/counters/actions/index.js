import { ACTION_INCREASE_COUNTER } from './constants'
import { MUTATION_INCREASE_COUNTER } from '../mutations/constants'

export default {
  [ACTION_INCREASE_COUNTER]({ commit, state }, payload) {
    commit(MUTATION_INCREASE_COUNTER, { ...state, ...payload })
  }
}
