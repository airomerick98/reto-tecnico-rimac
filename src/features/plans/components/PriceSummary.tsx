interface PriceSummaryProps {
  userName: string
  documentType: string
  documentNumber: string
  phone: string
  planName: string
  planPrice: number
}

export const PriceSummary = ({
  userName,
  documentType,
  documentNumber,
  phone,
  planName,
  planPrice,
}: PriceSummaryProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-background p-6">

      {/* Encabezado */}
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
        Precios calculados para:
      </p>

      <div className="mb-4 flex items-center gap-2">
        {/* Ícono personas */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            stroke="#03050F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="9"
            cy="7"
            r="4"
            stroke="#03050F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 21v-2a4 4 0 0 0-3-3.87"
            stroke="#03050F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13a4 4 0 0 1 0 7.75"
            stroke="#03050F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-lg font-bold text-black-100">{userName}</span>
      </div>

      <hr className="mb-4 border-gray-200" />

      {/* Responsable de pago */}
      <div className="mb-4">
        <p className="mb-1 text-sm font-bold text-black-100">Responsable de pago</p>
        <p className="text-sm text-gray-500">{documentType}: {documentNumber}</p>
        <p className="text-sm text-gray-500">Celular: {phone}</p>
      </div>

      {/* Plan elegido */}
      <div>
        <p className="mb-1 text-sm font-bold text-black-100">Plan elegido</p>
        <p className="text-sm text-gray-500">{planName}</p>
        <p className="text-sm text-gray-500">Costo del Plan: ${planPrice} al mes</p>
      </div>

    </div>
  )
}
