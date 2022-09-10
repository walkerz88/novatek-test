import { GETTERS_COUNTER } from './constants'

export default {
  [GETTERS_COUNTER]: (state) => (name) => {
    return state[name]
  }
}
