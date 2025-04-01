// La classe AuthContext serve per gestire l’autenticazione.
// In particolare, salva il token in sessionStorage e fornisce due metodi per effettuare il login e il logout.
// Il token viene salvato in sessionStorage per evitare che venga perso quando si ricarica la pagina.
import { jwtDecode } from 'jwt-decode'
import { createContext, useEffect, useState } from 'react'

// Il contesto AuthContext serve a condividere informazioni sull'autenticazione tra i componenti della App.
// In particolare, contiene un oggetto con tre valori:
// - token: il token JWT dell'utente loggato, o null se non  c'è  alcun utente loggato
// - login: una funzione che setta il token dell'utente loggato
// - logout: una funzione che setta il token dell'utente loggato a null
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  //Creo lo stato per il token di autenticazione
  const [token, setToken] = useState(sessionStorage.getItem('token') || null)

  //Creo lo stato per gestire i ruoli dell'utente loggato
  const [roles, setRoles] = useState([])

  // Salva il token in sessionStorage quando cambia
  useEffect(() => {
    if (token) {
      // Se il token esiste salva il token in sessionStorage, e questo evita che si perda ad ogni riavvio della pagina
      sessionStorage.setItem('token', token)

      try {
        const decoded = jwtDecode(token)
        if (decoded?.roles) {
          setRoles(decoded.roles)
        }
      } catch (error) {
        console.error('Errore nella decodifica del token:', error)
        setRoles([])
      }
    } else {
      // Rimuove il token da sessionStorage se non esise
      sessionStorage.removeItem('token')
      setRoles([])
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
    <AuthContext.Provider value={{ token, roles, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
