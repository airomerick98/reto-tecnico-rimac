import {
    forwardRef,
  } from 'react'
  import type {
    InputHTMLAttributes,
  } from "react";
  
  export interface BaseInputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
  }
  
  export const BaseInput =
    forwardRef<
      HTMLInputElement,
      BaseInputProps
    >(
      (
        {
          className = '',
          hasError,
          ...props
        },
        ref
      ) => {
        return (
          <input
            ref={ref}
            className={`
              h-12
              w-full
              rounded-lg
              border
              bg-white
  
              px-4
              py-[10px]
  
              text-sm
              text-gray-900
  
              outline-none
              transition-all
  
              placeholder:text-gray-400
  
              ${
                hasError
                  ? `
                    border-red-500
                    focus:border-red-500
                    focus:ring-red-100
                  `
                  : `
                    border-[#5E6488]
                    focus:border-black
                    focus:ring-black/5
                  `
              }
  
              focus:ring-2
  
              disabled:cursor-not-allowed
              disabled:bg-gray-100
  
              ${className}
            `}
            {...props}
          />
        )
      }
    )
  
  BaseInput.displayName =
    'BaseInput'