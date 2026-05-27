import { useUserStore } from '@/features/users/store/useUserStore'

export const ErrorPage = () => {
  const { reset } = useUserStore()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#FF1C44" fillOpacity="0.12" />
          <path
            d="M20 12v10"
            stroke="#FF1C44"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="27" r="1.5" fill="#FF1C44" />
        </svg>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-black-100">
          Algo salió mal
        </h1>
        <p className="max-w-xs text-sm text-gray-500">
          No pudimos cargar la información. Por favor, verifica tu conexión e inténtalo nuevamente.
        </p>
      </div>

      <button
        type="button"
        onClick={reset}
        className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-500 hover:text-black-100"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="8.5" stroke="currentColor" />
          <path
            d="M10.5 5.5L7 9l3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Volver al inicio
      </button>
    </div>
  )
}
