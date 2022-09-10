<template>
  <v-app>
    <v-main class="main">
      <div class="wrapper">
        <v-card>
          <v-tabs grow>
            <v-tab v-for="tab in APP_TABS" :key="tab.name" :to="tab.path">
              {{ tab.label }}
            </v-tab>
          </v-tabs>
          <v-card-text>
            <router-view />
          </v-card-text>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { APP_TABS } from './constants'

export default {
  name: 'App',

  components: {},

  created() {
    this.APP_TABS = APP_TABS
  },

  setup() {}
}
</script>

<style scoped>
.main {
  background-color: #f5f5f5;
  padding: 16px;
}

.wrapper {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
