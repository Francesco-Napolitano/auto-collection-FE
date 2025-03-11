import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DettagliAuto from './pages/DettagliAuto'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto/:id" element={<DettagliAuto />} />
        </Routes>
      </div>
    </>
  )
}

export default App
