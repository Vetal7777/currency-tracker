<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <div class="flex items-center justify-center gap-6">
      Find by date:
      <VueTailwindDatepicker
        v-model="datePickerValue"
        as-single
        class="w-min"
      />
    </div>
    <CurrenciesTable
      v-if="exchangeData.length"
      :list="exchangeData"
      @updateRate="({ cc, value }) => updateExchangeDataItem(cc, value, date)"
    />
  </div>
</template>

<script setup lang="ts">
import CurrenciesTable from '@/components/CurrenciesTable/CurrenciesTable.vue'
import { FULL_DATE_IN_NUMBER_FORMAT } from '@/composables/useDateFormatter'
import { useExchangeStore } from '@/store/exchange'
import moment from 'moment'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
// @ts-ignore
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

const DATEPICKER_DATE_TYPE = 'YYYY-MM-DD HH:mm:ss'

const exchangeStore = useExchangeStore()

const { updateExchangeDataItem } = exchangeStore
const { exchangeData, date } = storeToRefs(exchangeStore)

const datePickerValue = ref(moment().format(DATEPICKER_DATE_TYPE))

const dateIsAfter = () =>
  moment(
    moment(datePickerValue.value).format(FULL_DATE_IN_NUMBER_FORMAT)
  ).isAfter(moment().format(FULL_DATE_IN_NUMBER_FORMAT))

watch(
  () => datePickerValue.value,
  () => {
    const dateIsAfterToday = dateIsAfter()

    if (datePickerValue.value && !dateIsAfterToday) {
      date.value = new Date(datePickerValue.value)
    }
  }
)
</script>
