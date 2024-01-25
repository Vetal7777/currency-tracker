<template>
  <div class="col-span-2 flex items-center justify-start gap-5">
    <div>Filter by Name:</div>
    <input
      v-model="model"
      placeholder="Currecy name"
      class="find flex-grow rounded-xl border border-black bg-transparent px-5 py-1 text-xs text-black outline-none placeholder:text-black dark:border-nav-gray dark:text-nav-gray dark:placeholder:text-nav-gray"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FilterInputProps } from './types'

const props = defineProps<FilterInputProps>()
const emit = defineEmits()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<style lang="scss" scoped>
.find:focus {
  --tw-ring-color: '#ffff';
  @apply border-nav-gray outline-none
    outline-0 ring-offset-0 ring-offset-white;
}
</style>
