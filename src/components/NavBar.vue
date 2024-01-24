<template>
  <div
    class="flex w-min overflow-hidden rounded-lg border border-nav-gray bg-transparent p-1 text-xs"
  >
    <template v-for="({ name }, index) in routes">
      <button
        v-if="name"
        :class="[
          'cursor-pointer px-4 py-1 text-nav-gray transition-all hover:opacity-70 ',
          { active: isActiveRoute(name) }
        ]"
        :key="index"
        :disabled="isActiveRoute(name)"
        @click="$router.push({ name })"
      >
        {{ formatTitle(name) }}
      </button>
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
  @apply cursor-default rounded border-none bg-nav-gray text-black hover:opacity-100;
}
</style>
