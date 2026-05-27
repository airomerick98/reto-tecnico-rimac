import { useState } from 'react'
import type { Plan } from '../types/plan.types'
import { PlanCard } from './PlanCard'

interface PlanCarouselProps {
  plans: Plan[]
  recommendedIndex?: number
  onSelect: (plan: Plan) => void
}

export const PlanCarousel = ({ plans, recommendedIndex = 1, onSelect }: PlanCarouselProps) => {
  const [current, setCurrent] = useState(0)
  const total = plans.length

  const prev = () => setCurrent((i) => Math.max(i - 1, 0))
  const next = () => setCurrent((i) => Math.min(i + 1, total - 1))

  return (
    <>
      {/* Mobile: single card + navigation */}
      <div className="w-full md:hidden">
        <div className="mx-auto w-[288px]">
          <PlanCard
            name={plans[current].name}
            price={plans[current].price}
            originalPrice={plans[current].originalPrice}
            description={plans[current].description}
            recommended={current === recommendedIndex}
            onSelect={() => onSelect(plans[current])}
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-gray-500 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Plan anterior"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <span className="text-sm font-medium text-gray-500">
            {current + 1} / {total}
          </span>

          <button
            type="button"
            onClick={next}
            disabled={current === total - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-gray-500 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Siguiente plan"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden w-full md:flex md:justify-center md:gap-6">
        {plans.map((plan, index) => (
          <div key={plan.name} className="w-[288px]">
            <PlanCard
              name={plan.name}
              price={plan.price}
              originalPrice={plan.originalPrice}
              description={plan.description}
              recommended={index === recommendedIndex}
              onSelect={() => onSelect(plan)}
            />
          </div>
        ))}
      </div>
    </>
  )
}
