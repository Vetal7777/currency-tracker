<template>
  <div>
    <div>Home</div>
    <vue-tailwind-datepicker v-model="dateValue" as-single />
  </div>
</template>

<script setup lang="ts">
import { useExchange } from '@/store/exchange'
import { ref } from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

useExchange()

const dateValue = ref([])
</script>

<style lang="scss" scoped></style>
