import logoImage from '../assets/LOGO.jpg'

function Navbar() {
  return (
    <header className="bg-white border-b border-green-200 text-gray-800 py-6 md:py-8 shadow-sm">
      <nav className="container mx-auto px-4 flex items-center justify-center md:justify-start">
        <img
          src={logoImage}
          alt="Umer Logo"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-green-500 mr-3 md:mr-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-green-600">UM Software</h1>
      </nav>
    </header>
  )
}

export default Navbar