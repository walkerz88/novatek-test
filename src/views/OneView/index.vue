<template>
  <UiStoreCounter :name="name" />
</template>

<script>
import UiStoreCounter from '@/components/UiStoreCounter'

export default {
  name: 'OneView',
  components: {
    UiStoreCounter
  },
  created() {
    const { name } = this.$route

    this.name = name
  }
}
</script>
