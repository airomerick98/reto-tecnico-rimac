interface StepperProps {
  currentStep: number
  steps: string[]
  onBack?: () => void
}

export const Stepper = ({ currentStep, steps, onBack }: StepperProps) => {
  const total = steps.length

  return (
    <div className=" bg-white px-8 py-4">

      {/* Desktop */}
      <div className="hidden md:flex md:items-center md:justify-center">
        {steps.map((label, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isCompleted = stepNumber < currentStep

          return (
            <div key={label} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all
                    ${isActive || isCompleted
                      ? 'bg-blue text-white'
                      : 'border-2 border-gray-300 text-gray-400'
                    }
                  `}
                >
                  {stepNumber}
                </div>
                <span
                  className={`text-sm font-medium transition-all
                    ${isActive ? 'text-text-step' : 'text-gray-400'}
                  `}
                >
                  {label}
                </span>
              </div>

              {index < total - 1 && (
                <div className="mx-4 w-12 border-t-2 border-dashed border-gray-300" />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-3 md:hidden">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            aria-label="Volver"
            className="flex-shrink-0 text-gray-500"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
              <path
                d="M11.5 6.5L8 10l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        <span className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          Paso {currentStep} de {total}
        </span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-blue transition-all duration-300"
            style={{ width: `${(currentStep / total) * 100}%` }}
          />
        </div>
      </div>

    </div>
  )
}
