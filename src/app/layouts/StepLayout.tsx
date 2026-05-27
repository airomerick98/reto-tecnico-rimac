import type { ReactNode } from 'react'
import { Header } from '@/core/components/header/Header'
import { Stepper } from '@/core/components/stepper/Stepper'

interface StepLayoutProps {
  children: ReactNode
  currentStep: number
  steps: string[]
  onBack?: () => void
}

export const StepLayout = ({ children, currentStep, steps, onBack }: StepLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Stepper currentStep={currentStep} steps={steps} onBack={onBack} />

      {onBack && (
        <div className="mx-auto max-w-5xl px-8 pt-6 hidden md:block">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-800"
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
            Volver
          </button>
        </div>
      )}

      <main className="mx-auto max-w-5xl px-8 py-6 md:py-8">
        {children}
      </main>
    </div>
  )
}
