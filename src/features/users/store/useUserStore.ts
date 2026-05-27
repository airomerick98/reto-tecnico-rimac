import { create } from 'zustand'
import type { User } from '../types/user.types'
import type { Plan } from '@/features/plans/types/plan.types'

type DocumentType = 'DNI' | 'CE'
export type AppPage = 'login' | 'plans' | 'summary' | 'error'
export type CoverageType = 'solo' | 'conAlguien'

interface UserFormData {
  documentType: DocumentType
  documentNumber: string
  phone: string
  user: User
}

interface UserState {
  currentPage: AppPage
  documentType: DocumentType
  documentNumber: string
  phone: string
  user: User | null
  selectedPlan: Plan | null

  setFormData: (data: UserFormData) => void
  setCurrentPage: (page: AppPage) => void
  setSelectedPlan: (plan: Plan) => void
  setDocumentType: (type: DocumentType) => void
  setDocumentNumber: (value: string) => void
  setPhone: (value: string) => void
  reset: () => void
}

const initialState = {
  currentPage: 'login' as AppPage,
  documentType: 'DNI' as DocumentType,
  documentNumber: '',
  phone: '',
  user: null,
  selectedPlan: null,
}

export const useUserStore = create<UserState>((set) => ({
  ...initialState,

  setFormData: ({ documentType, documentNumber, phone, user }) =>
    set({ documentType, documentNumber, phone, user }),

  setCurrentPage: (page) => set({ currentPage: page }),
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
  setDocumentType: (type) => set({ documentType: type }),
  setDocumentNumber: (value) => set({ documentNumber: value }),
  setPhone: (value) => set({ phone: value }),
  reset: () => set(initialState),
}))
