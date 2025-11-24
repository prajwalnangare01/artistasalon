import logo from '../assets/images/logo.PNG';

function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
        <img src={logo} alt="Salon Artista logo" className="h-full w-full object-contain" />
      </div>
    </div>
  )
}

export default Logo

