import { useState } from 'react'
import { VALIDATION_MESSAGES } from '@/core/constants/validationMessages'

type DocumentType = 'DNI' | 'CE'

interface DocumentInputProps {
  onValueChange?: (
    type: DocumentType,
    value: string,
    isValid: boolean,
  ) => void
}

const MAX_LENGTH: Record<DocumentType, number> = {
  DNI: 8,
  CE: 12,
}

export const DocumentInput = ({
  onValueChange,
}: DocumentInputProps) => {
  const [type, setType] = useState<DocumentType>('DNI')
  const [value, setValue] = useState('')

  const maxLength = MAX_LENGTH[type]
  const isValid = value.length === maxLength
  const hasError = value.length > 0 && !isValid

  const handleTypeChange = (newType: DocumentType) => {
    setType(newType)
    setValue('')
    onValueChange?.(newType, '', false)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const onlyDigits = e.target.value.replace(/\D/g, '')
    if (onlyDigits.length > maxLength) return
    setValue(onlyDigits)
    onValueChange?.(type, onlyDigits, onlyDigits.length === maxLength)
  }

  const borderClass = hasError ? 'border-red-500' : 'border-[#5E6488]'

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-[#1E1E1E]">
        Documento
      </label>

      <div className="flex w-full">
        <select
          value={type}
          onChange={(e) => handleTypeChange(e.target.value as DocumentType)}
          className={`h-12 w-[80px] flex-shrink-0 rounded-l-lg border bg-white px-3 text-sm text-gray-900 outline-none transition-all focus:border-black ${borderClass}`}
        >
          <option value="DNI">DNI</option>
          <option value="CE">CE</option>
        </select>

        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleInputChange}
          placeholder={'0'.repeat(maxLength)}
          className={`h-12 w-full rounded-r-lg border border-l-0 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:ring-2 ${
            hasError
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-[#5E6488] focus:border-black focus:ring-black/5'
          }`}
        />
      </div>

      {hasError && (
        <span className="text-xs text-red-500">
          {type === 'DNI' ? VALIDATION_MESSAGES.dni : VALIDATION_MESSAGES.ce}
        </span>
      )}
    </div>
  )
}
