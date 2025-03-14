// La classe AuthContext serve per gestire l’autenticazione.
// In particolare, salva il token in sessionStorage e fornisce due metodi per effettuare il login e il logout.
// Il token viene salvato in sessionStorage per evitare che venga perso quando si ricarica la pagina.
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || null)

  // Salva il token in sessionStorage quando cambia
  useEffect(() => {
    if (token) {
      // Salva il token in sessionStorage, per evitare che venga perso quando si ricarica la pagina
      sessionStorage.setItem('token', token)
    } else {
      // Rimuove il token da sessionStorage
      sessionStorage.removeItem('token')
    }
  }, [token])

  //funzione login che setta il token
  const login = (newToken) => {
    setToken(newToken)
  }

  // funzione logout che setta il token a null
  const logout = () => {
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
