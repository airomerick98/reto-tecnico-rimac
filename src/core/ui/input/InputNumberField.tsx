import {
    forwardRef,
    useState,
  } from 'react'
  
  import { ErrorInput } from './ErrorInput'
  import { VALIDATION_MESSAGES } from '@/core/constants/validationMessages'
  
  interface PhoneInputProps {
    label?: string
    placeholder?: string
    errorMessage?: string
  
    onValueChange?: (
      value: string,
      isValid: boolean
    ) => void
  }
  
  const phoneRegex = /^9\d{8}$/
  
  export const PhoneInput =
    forwardRef<
      HTMLInputElement,
      PhoneInputProps
    >(
      (
        {
          label = 'Celular',
          placeholder = 'Ingrese su celular',
          errorMessage,
  
          onValueChange,
        },
        ref
      ) => {
        const [value, setValue] =
          useState('')
  
        const handleChange = (
          newValue: string,
          isValid: boolean
        ) => {
          // solo números
          const sanitized =
            newValue.replace(
              /\D/g,
              ''
            )
  
          // máximo 9
          if (sanitized.length > 9)
            return
  
          setValue(sanitized)
  
          onValueChange?.(
            sanitized,
            isValid
          )
        }
  
        return (
          <ErrorInput
            ref={ref}
            type="tel"
            label={label}
            value={value}
            regex={phoneRegex}
            placeholder={placeholder}
            errorMessage={
              errorMessage ?? VALIDATION_MESSAGES.phone
            }
            onValueChange={
              handleChange
            }
          />
        )
      }
    )
  
  PhoneInput.displayName =
    'PhoneInput'