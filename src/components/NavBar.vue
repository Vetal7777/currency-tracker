<template>
  <div
    class="flex w-min overflow-hidden rounded-lg border border-border-light bg-transparent p-1 text-xs dark:border-border-dark"
  >
    <template v-for="({ name }, index) in routes">
      <div
        v-if="name"
        :class="[
          'cursor-pointer px-4 py-1 text-base-light transition-all hover:opacity-70',
          { active: isActiveRoute(name) }
        ]"
        :key="index"
        @click="$router.push({ name })"
      >
        {{ formatTitle(name) }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouteRecordName, useRouter } from 'vue-router'

const router = useRouter()

const routes = computed(() =>
  router.options.routes.map(({ name, path }) => ({ name, path }))
)

const formatTitle = (title: RouteRecordName) =>
  String(title)[0].toUpperCase() + String(title).slice(1)

const isActiveRoute = (name: RouteRecordName) =>
  router.currentRoute.value.name === name
</script>

<style lang="scss" scoped>
.active {
  @apply rounded border-none bg-nav-gray;
}
</style>
