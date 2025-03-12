import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Nazioni from './pages/Nazioni'
import DettagliAuto from './components/DettagliAuto'
import AutoPerNazione from './components/AutoPerNazione'
import Login from './components/Login'
import Logout from './components/Logout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5">
        <Logout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/nazioni" element={<Nazioni />} />

          <Route
            path="/auto/:id"
            element={
              <ProtectedRoute>
                <DettagliAuto />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nazioni/:id"
            element={
              <ProtectedRoute>
                <AutoPerNazione />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 - Pagina non trovata</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
