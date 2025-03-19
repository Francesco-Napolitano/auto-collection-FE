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
import { useEffect } from 'react'
import Footer from './pages/Footer'
import AboutPageFooter from './components/AboutPageFooter'
import Automobili from './pages/Automobili'

function App() {
  useEffect(() => {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
    var themeToggleLightIcon = document.getElementById(
      'theme-toggle-light-icon'
    )

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      themeToggleLightIcon.classList.remove('hidden')
    } else {
      themeToggleDarkIcon.classList.remove('hidden')
    }

    var themeToggleBtn = document.getElementById('theme-toggle')

    themeToggleBtn.addEventListener('click', function () {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden')
      themeToggleLightIcon.classList.toggle('hidden')

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        } else {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')
        } else {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        }
      }
    })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/nazioni" element={<Nazioni />} />
        <Route path="/auto" element={<Automobili />} />
        <Route path="/logout" element={<Logout />} />
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
        <Route path="/common/about" element={<AboutPageFooter />} />
        <Route path="*" element={<h1>404 - Pagina non trovata</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
