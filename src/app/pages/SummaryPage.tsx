import { useUserStore } from '@/features/users/store/useUserStore'
import { PriceSummary } from '@/features/plans/components/PriceSummary'

export const SummaryPage = () => {
  const { user, documentType, documentNumber, phone, selectedPlan } = useUserStore()

  if (!user || !selectedPlan) return null

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[28px] font-bold text-black-100 md:text-[36px]">
        Resumen del seguro
      </h1>

      <div className="md:max-w-xl">
        <PriceSummary
          userName={`${user.name} ${user.lastName}`}
          documentType={documentType}
          documentNumber={documentNumber}
          phone={phone}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
        />
      </div>
    </div>
  )
}
