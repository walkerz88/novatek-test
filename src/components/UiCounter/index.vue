<template>
  <div class="ui-counter">
    <v-chip color="pink" label>
      <v-icon start icon="mdi-thumb-up" />
      Counter {{ counterName }}:
      {{ value }}
    </v-chip>
    <v-btn
      color=""
      variant="outlined"
      class="ui-counter__button"
      @click="$emit('increase', { counter: counterName, value: 1 })"
    >
      Plus +
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'UiCounter',
  props: {
    value: {
      type: Number,
      default: 0
    },
    counterName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.ui-counter {
  display: flex;
  gap: 8px;
}

.ui-counter__button.v-btn {
  height: 32px;
}
</style>
