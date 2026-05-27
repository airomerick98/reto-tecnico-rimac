import { Button } from '@/core/ui/button/Button'
import { Checkbox } from '@/core/ui/checkbox/Checkbox'
import { PhoneInput } from '@/core/ui/input/InputNumberField'
import { DocumentInput } from '@/core/ui/input/InputTextField'
import { useLoginForm } from '@/features/users/hooks/useLoginForm'
import loginDesktop from '@/assests/images/image-login-desktop.svg'
import loginMobile from '@/assests/images/image-login-mobile.svg'

export const LoginPage = () => {
  const {
    acceptPrivacy,
    acceptComercial,
    apiError,
    canSubmit,
    isFetching,
    handleSubmit,
    onDocumentChange,
    onPhoneChange,
    onPrivacyChange,
    onComercialChange,
  } = useLoginForm()

  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-[45%_55%] md:items-start md:gap-12">

      <div className="hidden md:block overflow-hidden rounded-3xl">
        <img src={loginDesktop} alt="Familia RIMAC" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-6">

        <div className="flex items-start justify-between md:block">
          <span className="inline-block rounded-full bg-green px-3 py-1 text-xs font-semibold text-black-100">
            Seguro Salud Flexible
          </span>
          <div className="h-[130px] w-[140px] flex-shrink-0 overflow-hidden rounded-3xl md:hidden">
            <img src={loginMobile} alt="Familia" className="h-full w-full object-cover" />
          </div>
        </div>

        <div>
          <h1 className="mb-3 text-[32px] font-bold leading-tight text-black-100 md:text-[44px]">
            Creado para ti y tu familia
          </h1>
          <p className="text-sm text-gray-500">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría 100% online.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <DocumentInput onValueChange={onDocumentChange} />

          <PhoneInput onValueChange={onPhoneChange} />

          <div className="flex flex-col gap-2">
            <Checkbox
              label="Acepto la Política de Privacidad"
              checked={acceptPrivacy}
              onChange={(e) => onPrivacyChange(e.target.checked)}
            />
            <Checkbox
              label="Acepto la Política Comunicaciones Comerciales"
              checked={acceptComercial}
              onChange={(e) => onComercialChange(e.target.checked)}
            />
            <a href="#" className="text-sm font-medium underline text-black-100">
              Aplican Términos y Condiciones.
            </a>
          </div>

          {apiError && (
            <p className="text-sm text-red-button">{apiError}</p>
          )}

          <Button
            type="submit"
            fullWidth
            disabled={!canSubmit}
            loading={isFetching}
          >
            Cotiza aquí
          </Button>
        </form>
      </div>
    </div>
  )
}
