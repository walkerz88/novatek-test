<template>
  <UiCounter
    :value="counterValue(name)"
    :counter-name="name"
    @increase="increase"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import UiCounter from '@/components/UiCounter'

import { STORE_MODULE_COUNTERS } from '@/store/constants/index'
import { GETTERS_COUNTER } from '@/store/modules/counters/getters/constants'
import { ACTION_INCREASE_COUNTER } from '@/store/modules/counters/actions/constants'

export default {
  name: 'OneView',
  components: {
    UiCounter
  },
  props: {
    name: {
      type: String,
      default: 'one'
    }
  },
  computed: {
    ...mapGetters(STORE_MODULE_COUNTERS, {
      counterValue: GETTERS_COUNTER
    })
  },
  methods: {
    ...mapActions(STORE_MODULE_COUNTERS, {
      increase: ACTION_INCREASE_COUNTER
    })
  }
}
</script>
