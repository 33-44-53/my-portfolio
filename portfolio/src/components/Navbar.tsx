import logoImage from '../assets/LOGO.jpg'

function Navbar() {
  return (
    <header className="bg-blue-900 text-white py-8">
      <nav className="container mx-auto px-4 flex items-center">
        <img
          src={logoImage}
          alt="Umer Logo"
          className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 mr-4"
        />
        <h1 className="text-3xl font-bold text-yellow-400">UM Software</h1>
      </nav>
    </header>
  )
}

export default Navbar