import {
    forwardRef,
  } from 'react'
  import type {
    ButtonHTMLAttributes,
  } from "react";
  
  import { BaseButton } from './BaseButton'
  
  interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    background?: string
    fullWidth?: boolean
    loading?: boolean
  }
  
  export const Button =
    forwardRef<
      HTMLButtonElement,
      ButtonProps
    >((props, ref) => {
      return (
        <BaseButton
          ref={ref}
          {...props}
        />
      )
    })
  
  Button.displayName = 'Button'