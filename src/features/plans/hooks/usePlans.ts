import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useUserStore } from '@/features/users/store/useUserStore'
import { getPlans } from '../api/getPlans'
import { calcAge } from '../utils/calcAge'
import type { CoverageType } from '@/features/users/store/useUserStore'
import type { Plan } from '../types/plan.types'

const DISCOUNT_RATE = 0.95

export const usePlans = () => {
  const { user, setSelectedPlan, setCurrentPage } = useUserStore()
  const [coverage, setCoverage] = useState<CoverageType | null>(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['plans'],
    queryFn: getPlans,
    retry: false,
    throwOnError: () => {
      setCurrentPage('error')
      return false
    },
  })

  const userAge = user?.birthDay ? calcAge(user.birthDay) : 0

  const filteredPlans: Plan[] = coverage && data?.list
    ? data.list.filter((p) => p.age >= userAge)
    : []

  const displayPlans: Plan[] = coverage === 'conAlguien'
    ? filteredPlans.map((p) => ({
        ...p,
        originalPrice: p.price,
        price: parseFloat((p.price * DISCOUNT_RATE).toFixed(2)),
      }))
    : filteredPlans

  const handleSelectCoverage = (type: CoverageType) => {
    setCoverage(type)
  }

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan)
    setCurrentPage('summary')
  }

  return {
    userName: user?.name,
    coverage,
    displayPlans,
    isLoading,
    isError,
    handleSelectCoverage,
    handleSelectPlan,
  }
}
