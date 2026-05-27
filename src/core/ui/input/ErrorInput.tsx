import {
    forwardRef,
    InputHTMLAttributes,
  } from 'react'
  
  import { BaseInput } from './BaseInput'
  
  interface ErrorInputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    value: string
    regex: RegExp
    errorMessage?: string
    onValueChange?: (
      value: string,
      isValid: boolean
    ) => void
  }
  
  export const ErrorInput =
    forwardRef<
      HTMLInputElement,
      ErrorInputProps
    >(
      (
        {
          label,
          value,
          regex,
          errorMessage = 'Formato inválido',
          onValueChange,
          ...props
        },
        ref
      ) => {
        const isValid =
          regex.test(value)
  
        const hasError =
          !isValid &&
          value.length > 0
  
        const helperText =
          hasError
            ? errorMessage
            : ''
  
        const handleChange = (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          const newValue =
            e.target.value
  
          const valid =
            regex.test(newValue)
  
          onValueChange?.(
            newValue,
            valid
          )
        }
  
        return (
          <div className="flex flex-col gap-1">
            {/* Label */}
            {label && (
              <label
                className="
                  text-sm
                  font-medium
                  text-[#1E1E1E]
                "
              >
                {label}
              </label>
            )}
  
            {/* Input */}
            <BaseInput
              ref={ref}
              value={value}
              hasError={hasError}
              onChange={
                handleChange
              }
              {...props}
            />
  
            {/* Error */}
            {helperText && (
              <span
                className="
                  text-xs
                  text-red-500
                "
              >
                {helperText}
              </span>
            )}
          </div>
        )
      }
    )
  
  ErrorInput.displayName =
    'ErrorInput'