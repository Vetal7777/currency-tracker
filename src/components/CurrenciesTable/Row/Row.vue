<template>
  <div
    :class="[
      'row relative col-span-2 grid grid-cols-2 overflow-hidden rounded-xl bg-transparent transition-all',
      { simple: !editStatus, edit: editStatus }
    ]"
  >
    <!-- Edit status -->
    <template v-if="editStatus">
      <div class="td text-base-red">{{ title }}</div>
      <input
        ref="input"
        type="number"
        class="td input w-min border-none bg-transparent px-5 py-3 text-xs"
        :value="value"
      />
      <button
        class="edit-status absolute right-5 flex h-full cursor-pointer items-center text-white transition-all"
        @click="editRate"
      >
        Save
      </button>
    </template>
    <!-- Simple status -->
    <template v-else>
      <div class="td text-base-red">{{ title }}</div>
      <div class="td">{{ value }}</div>
      <button
        class="edit-status absolute right-5 flex h-full translate-x-32 cursor-pointer items-center text-white transition-all"
        @click="editStatus = true"
      >
        Edit
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { RowProps } from './types'

const props = defineProps<RowProps>()
const emit = defineEmits()

const input = ref<HTMLInputElement | null>(null)
const editStatus = ref(false)

const editRate = () => {
  const value = Number(input.value?.value)

  if (value !== props.value) {
    emit('updateRate', input.value?.value)
  }
  editStatus.value = false
}

// set Focus on input
watch(
  () => editStatus.value,
  async () => {
    if (editStatus.value) {
      await nextTick()
      input.value?.focus()
    }
  }
)
</script>

<style lang="scss" scoped>
.td {
  @apply rounded-xl px-5 py-3;
}

.row {
  &.simple:hover {
    @apply cursor-pointer hover:bg-base-red;
    .td {
      @apply text-white;
    }
    .edit-status {
      @apply translate-x-0;
    }
  }

  &.edit {
    @apply bg-base-red;
    .td {
      @apply text-white;

      &.input {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        &[type='number'] {
          -moz-appearance: textfield;
        }

        &:focus {
          --tw-ring-color: '#ffff';
          @apply border-nav-gray outline-none
    outline-0 ring-offset-0 ring-offset-white;
        }
      }
    }
  }
}
</style>
