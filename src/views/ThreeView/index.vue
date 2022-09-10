<template>
  <UiStoreCounter :name="name" />
</template>

<script>
import UiStoreCounter from '@/components/UiStoreCounter'

export default {
  name: 'ThreeView',
  components: {
    UiStoreCounter
  },
  created() {
    const { name } = this.$route

    this.name = name
  }
}
</script>
