import { Button } from '@/core/ui/button/Button'
import { BulletItem } from '@/core/ui/bullet/BulletItem'
import { getPlanIcon } from '../utils/getPlanIcon'

interface PlanCardProps {
  name: string
  price: number
  originalPrice?: number
  description: string[]
  recommended?: boolean
  onSelect?: () => void
}

export const PlanCard = ({
  name,
  price,
  originalPrice,
  description,
  recommended = false,
  onSelect,
}: PlanCardProps) => {
  return (
    <div
      className={`
        flex h-[687px] flex-col rounded-2xl bg-white p-8
        border transition-shadow
        ${recommended ? 'border-gray-200 shadow-lg' : 'border-gray-200 shadow-sm'}
      `}
    >
      {recommended ? (
        <span className="mb-4 self-start rounded-full bg-green px-3 py-1 text-xs font-semibold text-black-100">
          Plan recomendado
        </span>
      ) : (
        <div className="mb-4 h-[26px]" />
      )}

      {/* Nombre + icono */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-black-100">{name}</h3>
        <div className="flex-shrink-0">
          {getPlanIcon(name)}
        </div>
      </div>

      {/* Costo */}
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-blue">
        Costo del plan
      </p>
      {originalPrice && (
        <p className="text-xs text-muted-blue line-through">
          ${originalPrice} antes
        </p>
      )}
      <p className="mt-1 text-2xl font-bold text-black-100">
        ${Number.isInteger(price) ? price : price.toFixed(2)}{' '}
        <span className="text-base font-normal text-gray-500">al mes</span>
      </p>

      <hr className="my-4 border-gray-200" />

      {/* Beneficios */}
      <ul className="mb-6 flex flex-1 flex-col gap-3">
        {description.map((item) => (
          <BulletItem key={item} text={item} />
        ))}
      </ul>

      <Button fullWidth background="var(--color-red-button)" onClick={onSelect}>
        Seleccionar Plan
      </Button>
    </div>
  )
}
