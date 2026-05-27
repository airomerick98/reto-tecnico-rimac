import type { CoverageType } from '@/features/users/store/useUserStore'

const IconSolo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path
      d="M24 4L8 11v13c0 9.4 6.84 18.18 16 20.36C33.16 42.18 40 33.4 40 24V11L24 4z"
      fill="#F0EEFF"
      stroke="#4F4FFF"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="20" r="4" fill="#FF6B9D" />
    <path d="M16 34c0-4.418 3.582-8 8-8s8 3.582 8 8" fill="#FF6B9D" />
  </svg>
)

const IconConAlguien = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path
      d="M24 4L8 11v13c0 9.4 6.84 18.18 16 20.36C33.16 42.18 40 33.4 40 24V11L24 4z"
      fill="#F0EEFF"
      stroke="#4F4FFF"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="20" r="3.5" fill="#FF6B9D" />
    <path d="M13 34c0-3.866 3.134-7 7-7s7 3.134 7 7" fill="#FF6B9D" />
    <circle cx="33" cy="17" r="2.5" fill="#4F4FFF" />
    <path d="M28.5 30c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" fill="#4F4FFF" />
    <circle cx="36" cy="11" r="4" fill="#04D9B2" />
    <path d="M36 9v4M34 11h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export interface CoverageOption {
  type: CoverageType
  title: string
  description: string
  icon: React.ReactNode
}

export const COVERAGE_OPTIONS: CoverageOption[] = [
  {
    type: 'solo',
    title: 'Para mí',
    description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    icon: <IconSolo />,
  },
  {
    type: 'conAlguien',
    title: 'Para alguien más',
    description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
    icon: <IconConAlguien />,
  },
]
