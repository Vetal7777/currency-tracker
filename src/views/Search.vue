<template>
  <div>
    <div>Search</div>
    <VueTailwindDatepicker v-model="dateValue" as-single />
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { ref } from 'vue'

const dateValue = ref(moment().format('YYYY-MM-DD HH:mm:ss'))
</script>
