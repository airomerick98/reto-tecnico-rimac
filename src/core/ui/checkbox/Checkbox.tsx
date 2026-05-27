import {
    forwardRef,
    InputHTMLAttributes,
  } from 'react'
  
  interface CheckboxProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
  }
  
  export const Checkbox =
    forwardRef<
      HTMLInputElement,
      CheckboxProps
    >(
      (
        {
          label,
          className = '',
          ...props
        },
        ref
      ) => {
        return (
          <label
            className="
              flex
              cursor-pointer
              items-center
              gap-3
            "
          >
            {/* Checkbox */}
            <input
              ref={ref}
              type="checkbox"
              className={`
                h-5
                w-5
  
                cursor-pointer
  
                rounded
  
                accent-[#0A051E]
  
                ${className}
              `}
              {...props}
            />
  
            {/* Text */}
            {label && (
              <span
                className="
                  text-[14px]
                  font-normal
                  leading-6
                  tracking-[0.2px]
                  text-[#03050F]
                "
              >
                {label}
              </span>
            )}
          </label>
        )
      }
    )
  
  Checkbox.displayName =
    'Checkbox'