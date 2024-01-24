import { computed, ref } from 'vue'
import { Pagination } from './types'

const START_PAGE = 1

export default function usePagination(): Pagination {
  const page = ref(START_PAGE)
  const data = ref<unknown[]>([])

  const perPage = 10

  const paginatedData = computed(() =>
    data.value.slice((page.value - 1) * perPage, page.value * perPage)
  )
  const pagesQuantity = computed(() => Math.ceil(data.value.length / perPage))

  const nextPage = () => {
    if (page.value !== Math.ceil(data.value.length / perPage)) {
      page.value += 1
    }
  }
  const backPage = () => {
    if (page.value !== START_PAGE) {
      page.value -= 1
    }
  }
  const setData = (array: unknown[]) => {
    page.value = START_PAGE
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
    setData,
    pagesQuantity
  }
}
