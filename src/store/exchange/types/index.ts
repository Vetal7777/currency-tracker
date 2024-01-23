// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExchange = defineStore('exchange', () => {
  const state = ref()

  return { state }
})
