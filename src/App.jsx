import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Nazioni from './pages/Nazioni'
import DettagliAuto from './components/DettagliAuto'
import AutoPerNazione from './components/AutoPerNazione'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="">
      <Navbar />
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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 - Pagina non trovata</h1>} />
      </Routes>
    </div>
  )
}

export default App
