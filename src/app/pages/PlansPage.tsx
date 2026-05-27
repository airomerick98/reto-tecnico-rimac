import { usePlans } from '@/features/plans/hooks/usePlans'
import { COVERAGE_OPTIONS } from '@/features/plans/constants/coverageOptions'
import { Card } from '@/core/components/card/Card'
import { PlanCarousel } from '@/features/plans/components/PlanCarousel'

export const PlansPage = () => {
  const {
    userName,
    coverage,
    displayPlans,
    isLoading,
    isError,
    handleSelectCoverage,
    handleSelectPlan,
  } = usePlans()

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full text-center">
        <h1 className="text-[28px] font-bold leading-snug text-black-100 md:text-[36px]">
          {userName},{' '}
          <span className="font-normal">¿Para quién deseas cotizar?</span>
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:max-w-[480px]">
        {COVERAGE_OPTIONS.map((opt) => (
          <Card
            key={opt.type}
            icon={opt.icon}
            title={opt.title}
            description={opt.description}
            selected={coverage === opt.type}
            onSelect={() => handleSelectCoverage(opt.type)}
          />
        ))}
      </div>

      {coverage && (
        <div className="w-full">
          {isLoading && <p className="text-sm text-gray-400">Cargando planes...</p>}
          {isError && (
            <p className="text-sm text-red-button">
              Error al cargar los planes. Intenta nuevamente.
            </p>
          )}
          {!isLoading && !isError && displayPlans.length > 0 && (
            <PlanCarousel
              plans={displayPlans}
              recommendedIndex={1}
              onSelect={handleSelectPlan}
            />
          )}
        </div>
      )}
    </div>
  )
}
