<template>
  <div
    class="flex min-h-screen w-screen flex-col gap-6 bg-white p-4 text-black dark:bg-black dark:text-white"
  >
    <!-- App header -->
    <div class="flex items-center justify-between">
      <NavBar />
      <CurrentDate />
    </div>
    <!-- Router View -->
    <RouterView v-slot="{ Component }">
      <Transition name="slide" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script lang="ts" setup>
import CurrentDate from '@/components/CurrentDate.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<style lang="scss">
// Router transition
.slide-leave-active {
  transition: transform 0.175s ease-out;
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
