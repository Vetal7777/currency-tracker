<template>
  <div
    class="border-border-light dark:border-border-dark mx-auto flex w-min overflow-hidden rounded-lg border bg-transparent text-xs"
  >
    <template v-for="({ name }, index) in routes">
      <div
        v-if="name"
        :class="[
          'text-base-light cursor-pointer px-4 py-1 transition-all hover:opacity-70',
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
  @apply bg-nav-gray rounded border-none;
}
</style>
