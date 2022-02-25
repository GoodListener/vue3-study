import { defineStore } from 'pinia'
import { User } from '../../models/user.model'

export type RootState = {
  users: User[]
}

const useUserStore = defineStore('user', {
  state: () =>
    ({
      users: [],
    } as RootState),
})

export default {
  useUserStore,
}
