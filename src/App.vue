<template>
  <v-app>
    <v-main class="main">
      <div class="wrapper">
        <v-card>
          <v-tabs v-model="activeTab" v-show="tabs.length > 0">
            <div class="tab" v-for="tab in tabs" :key="tab.name">
              <v-tab :to="tab.path" class="tab__link">
                {{ tab.label }}
              </v-tab>
              <v-btn
                flat
                icon="mdi-close"
                size="x-small"
                class="tab__close"
                @click="closeTab(tab.name)"
              />
            </div>
          </v-tabs>
          <v-card-text>
            <router-view v-if="tabs.length > 0" />
            <template v-else>
              <v-icon icon="mdi-alert" color="orange" class="mr-2" />
              <span>Please, select any tab</span>
            </template>
          </v-card-text>
        </v-card>
        <div class="text-right">
          <v-btn
            v-show="closedTabs.length > 0"
            class="mt-4"
            @click="undoCloseTab"
          >
            Undo close tab
          </v-btn>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { ref, computed } from 'vue'
import { mapActions } from 'vuex'

import { STORE_MODULE_COUNTERS } from '@/store/constants/index'
import { ACTION_DROP_COUNTER } from '@/store/modules/counters/actions/constants'

import { PATH_HOME } from '@/router/routes/constants'

import { APP_TABS } from './constants'

export default {
  name: 'App',

  created() {
    this.APP_TABS = APP_TABS
  },

  setup() {
    const activeTab = ref(0)
    const closedTabs = ref([])
    const tabs = computed(() =>
      APP_TABS.filter((item) => closedTabs.value.includes(item.name) === false)
    )

    return {
      activeTab,
      closedTabs,
      tabs
    }
  },

  methods: {
    ...mapActions(STORE_MODULE_COUNTERS, {
      dropCounter: ACTION_DROP_COUNTER
    }),
    closeTab(name) {
      const { name: routeName } = this.$route

      if (routeName === name) {
        const previousTabIndex =
          this.tabs.findIndex((item) => item.name === name) - 1

        const nextTabIndex =
          this.tabs.findIndex((item) => item.name === name) + 1

        const previousTab = this.tabs[previousTabIndex]
        const nextTab = this.tabs[nextTabIndex]

        if (nextTab !== undefined) {
          this.$router.push({ name: nextTab.name })
        } else if (previousTab !== undefined) {
          this.$router.push({ name: previousTab.name })
        } else {
          this.$router.push({ name: PATH_HOME.name })
        }

        this.updateActiveTab()
      }

      this.closedTabs.push(name)

      this.dropCounter(name)
    },
    undoCloseTab() {
      const name = this.closedTabs[this.closedTabs.length - 1]

      this.closedTabs.pop()

      this.$router.push({ name })

      this.updateActiveTab()
    },
    updateActiveTab() {
      const { name } = this.$route

      this.activeTab = this.tabs.indexOf((item) => item.name === name)
    }
  }
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

.tab {
  flex: 1 1 auto;
  position: relative;
}

.tab__link {
  width: 100%;
}

.tab__close {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
}
</style>
