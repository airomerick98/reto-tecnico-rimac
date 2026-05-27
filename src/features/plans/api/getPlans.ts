import { api } from '@/core/api/api'
import type { PlansResponse } from '../types/plan.types'



export const getPlans =
  async (): Promise<PlansResponse> => {
    const response =
      await api.get(
        import.meta.env
          .VITE_URL_DOMAIN_PLANS
      )

    return response.data
  }