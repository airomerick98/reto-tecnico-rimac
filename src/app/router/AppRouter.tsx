import { useUserStore } from '@/features/users/store/useUserStore'
import { AuthLayout } from '@/app/layouts/AuthLayout'
import { StepLayout } from '@/app/layouts/StepLayout'
import { LoginPage } from '@/app/pages/LoginPage'
import { PlansPage } from '@/app/pages/PlansPage'
import { SummaryPage } from '@/app/pages/SummaryPage'
import { ErrorPage } from '@/app/pages/ErrorPage'

const STEPS = ['Planes y coberturas', 'Resumen']

export const AppRouter = () => {
  const { currentPage, setCurrentPage, reset } = useUserStore()

  if (currentPage === 'login') {
    return (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    )
  }

  if (currentPage === 'plans') {
    return (
      <StepLayout currentStep={1} steps={STEPS} onBack={reset}>
        <PlansPage />
      </StepLayout>
    )
  }

  if (currentPage === 'summary') {
    return (
      <StepLayout currentStep={2} steps={STEPS} onBack={() => setCurrentPage('plans')}>
        <SummaryPage />
      </StepLayout>
    )
  }

  if (currentPage === 'error') {
    return <ErrorPage />
  }

  return null
}
