<template>
  <div class="flex flex-col items-center gap-10">
    <template v-if="none">None</template>
    <template v-else>
      <div
        v-for="[key, dataArray] in Object.entries(editedExchangeData)"
        class="flex flex-col gap-5"
      >
        <!-- Date -->
        <div class="text-base-red">
          {{ formatFullDate(key) }}
        </div>
        <!-- CurrenciesTable -->
        <CurrenciesTable
          v-if="dataArray.length"
          :list="dataArray"
          @updateRate="
            ({ cc, value }) => updateExchangeDataItem(cc, value, new Date(key))
          "
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import CurrenciesTable from '@/components/CurrenciesTable/CurrenciesTable.vue'
import { useDateFormatter } from '@/composables/useDateFormatter'
import { useExchangeStore } from '@/store/exchange'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const exchangeStore = useExchangeStore()
const dateForamtter = useDateFormatter()

const { updateExchangeDataItem } = exchangeStore
const { formatFullDate } = dateForamtter
const { editedExchangeData } = storeToRefs(exchangeStore)

const none = computed(() => !Object.keys(editedExchangeData.value).length)
</script>

<style lang="scss" scoped></style>
