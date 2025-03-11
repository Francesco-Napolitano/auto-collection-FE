import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DettagliAuto from './pages/DettagliAuto'
import Brand from './pages/Brand'
import Nazioni from './pages/Nazioni'
import AutoPerNazione from './pages/AutoPerNazione'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto/:id" element={<DettagliAuto />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/nazioni" element={<Nazioni />} />
          <Route path="/nazioni/:id" element={<AutoPerNazione />} />
          <Route path="*" element={<h1>404 - Pagina non trovata</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
