import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
