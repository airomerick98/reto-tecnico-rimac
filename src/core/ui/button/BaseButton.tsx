import {
    forwardRef,
  } from 'react'
  import type {
    ButtonHTMLAttributes,
  } from "react";
  
  interface BaseButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    background?: string
    fullWidth?: boolean
    loading?: boolean
  }
  
  export const BaseButton =
    forwardRef<
      HTMLButtonElement,
      BaseButtonProps
    >(
      (
        {
          children,
          className = '',
          background = 'var(--color-black-100)',
          fullWidth = false,
          loading = false,
          disabled,
          ...props
        },
        ref
      ) => {
        return (
          <button
            ref={ref}
            disabled={
              disabled || loading
            }
            style={{
              backgroundColor:
                background,
            }}
            className={`
              flex
              h-14
              items-center
              justify-center
              gap-2
  
              rounded-full
  
              px-10
              py-[18px]
  
              text-sm
              font-semibold
              text-white
  
              transition-all
  
              hover:opacity-90
              active:scale-[0.98]
  
              disabled:cursor-not-allowed
              disabled:opacity-50
  
              ${
                fullWidth
                  ? 'w-full'
                  : 'w-fit'
              }
  
              ${className}
            `}
            {...props}
          >
            {loading
              ? 'Cargando...'
              : children}
          </button>
        )
      }
    )
  
  BaseButton.displayName =
    'BaseButton'