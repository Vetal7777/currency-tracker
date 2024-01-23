<template>
  <div
    class="flex min-h-screen w-screen flex-col justify-between bg-white text-black dark:bg-black dark:text-white"
  >
    <div class="p-5">
      <RouterView v-slot="{ Component }">
        <!-- Route View -->
        <Transition name="slide" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<style lang="scss">
// Router transition
.slide-leave-active {
  transition: transform 0.175s ease-out;
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
