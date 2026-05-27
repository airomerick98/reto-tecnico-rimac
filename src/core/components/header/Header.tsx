import iconLogo from '@/assests/icons/icon-logo.svg'

export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-8 py-4">
      <img src={iconLogo} alt="RIMAC" />

      <div className="flex items-center gap-2">
        <span className="hidden text-sm text-gray-500 md:inline">
          ¿Compra por este medio?
        </span>
        <a
          href="tel:014116001"
          className="flex items-center gap-1.5 font-bold text-black-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          (01) 411 6001
        </a>
      </div>
    </header>
  )
}
