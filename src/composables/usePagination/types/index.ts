import { Ref } from 'vue'

export type Pagination = {
  data: Ref<unknown[]>
  paginatedData: Readonly<Ref<unknown[]>>
  pagesQuantity: Readonly<Ref<number>>
  perPage: number
  page: Ref<number>
  nextPage: () => void
  backPage: () => void
  goToPage: (numPage: number) => void
  setData: (array: unknown[]) => void
}
