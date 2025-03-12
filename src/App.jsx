import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Nazioni from './pages/Nazioni'
import DettagliAuto from './components/DettagliAuto'
import AutoPerNazione from './components/AutoPerNazione'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5">
        <Logout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto/:id" element={<DettagliAuto />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/nazioni" element={<Nazioni />} />
          <Route path="/nazioni/:id" element={<AutoPerNazione />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 - Pagina non trovata</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
