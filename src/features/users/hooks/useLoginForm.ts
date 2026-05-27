import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useUserStore } from '../store/useUserStore'
import { getUser } from '../api/getUsers'
import { VALIDATION_MESSAGES } from '@/core/constants/validationMessages'

type DocumentType = 'DNI' | 'CE'

export const useLoginForm = () => {
  const {
    documentType,
    documentNumber,
    phone,
    setDocumentType,
    setDocumentNumber,
    setPhone,
    setFormData,
    setCurrentPage,
  } = useUserStore()

  const [docValid, setDocValid] = useState(false)
  const [phoneValid, setPhoneValid] = useState(false)
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [acceptComercial, setAcceptComercial] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)

  const canSubmit = docValid && phoneValid && acceptPrivacy

  const { refetch, isFetching } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: false,
    retry: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError(null)

    const { data, isError } = await refetch()

    if (isError || !data) {
      setApiError(VALIDATION_MESSAGES.apiError)
      return
    }

    setFormData({ documentType, documentNumber, phone, user: data })
    setCurrentPage('plans')
  }

  return {
    documentType,
    acceptPrivacy,
    acceptComercial,
    apiError,
    canSubmit,
    isFetching,
    handleSubmit,
    onDocumentChange: (type: DocumentType, value: string, isValid: boolean) => {
      setDocumentType(type)
      setDocumentNumber(value)
      setDocValid(isValid)
    },
    onPhoneChange: (value: string, isValid: boolean) => {
      setPhone(value)
      setPhoneValid(isValid)
    },
    onPrivacyChange: (checked: boolean) => setAcceptPrivacy(checked),
    onComercialChange: (checked: boolean) => setAcceptComercial(checked),
  }
}
