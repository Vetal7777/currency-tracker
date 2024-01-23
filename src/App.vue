<template>
  <div
    class="flex min-h-screen w-screen flex-col justify-between bg-white text-black dark:bg-black dark:text-white"
  >
    <div class="p-5">
      <router-view v-slot="{ Component }">
        <!-- Route View -->
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
// Router transition
.slide-leave-active {
  transition: transform 0.175s ease-out;
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
