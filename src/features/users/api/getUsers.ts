import { api } from '@/core/api/api'
import type { User } from '../types/user.types'


export const getUser =
  async (): Promise<User> => {
    const response =
      await api.get(
        import.meta.env
          .VITE_URL_DOMAIN_USER
      )

    return response.data
  }