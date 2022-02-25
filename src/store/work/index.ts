import { defineStore } from 'pinia'
import { Work } from '../../models/work.model'

export type RootState = {
  works: Work[]
}

const useWorkStore = defineStore('work', {
  state: () =>
    ({
      works: [],
    } as RootState),
})

export default {
  useWorkStore,
}
