import { computed, ref } from 'vue'
import { Pagination } from './types'

export default function usePagination(): Pagination {
  const page = ref(1)
  const data = ref<unknown[]>([])

  const perPage = 10

  const paginatedData = computed(() =>
    data.value.slice((page.value - 1) * perPage, page.value * perPage)
  )

  const nextPage = () => {
    if (page.value !== Math.ceil(data.value.length / perPage)) {
      page.value += 1
    }
  }
  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1
    }
  }
  const setData = (array: unknown[]) => {
    data.value = array
  }
  const goToPage = (numPage: number) => {
    page.value = numPage
  }

  return {
    data,
    paginatedData,
    perPage,
    page,
    nextPage,
    backPage,
    goToPage,
    setData
  }
}
