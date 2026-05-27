import loginDesktop from '@/assests/images/image-login-desktop.svg'
import loginMobile from '@/assests/images/image-login-mobile.svg'

export const ImageLogo = () => {
  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet={loginDesktop}
      />

      <img
        src={loginMobile}
        alt="Login"
        className="
          h-full
          w-full
          object-cover
        "
      />
    </picture>
  )
}