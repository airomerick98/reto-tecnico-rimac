import type { ReactNode } from 'react'

interface CardProps {
  icon: ReactNode
  title: string
  description: string
  selected?: boolean
  onSelect?: () => void
}

export const Card = ({
  icon,
  title,
  description,
  selected = false,
  onSelect,
}: CardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        relative w-full text-left
        rounded-2xl bg-white px-6 pb-6 pt-10
        border-2 transition-all duration-200
        ${selected
          ? 'border-black-100 shadow-sm'
          : 'border-gray-200 hover:border-gray-300'
        }
      `}
    >
      {/* Radio indicator — esquina superior derecha */}
      {selected ? (
        <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-green">
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L4.5 8.5L11 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        <div className="absolute right-4 top-4 h-6 w-6 rounded-full border-2 border-gray-300" />
      )}

      {/* Icono */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
        {icon}
      </div>

      {/* Título */}
      <h3 className="mb-1 text-base font-bold text-[#03050F]">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-sm leading-relaxed text-gray-500">
        {description}
      </p>
    </button>
  )
}
