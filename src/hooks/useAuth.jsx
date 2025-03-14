import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/axiosInstance'

const useAuth = () => {
  const { token, login, logout } = useContext(AuthContext)
  const axiosInstance = useAxios()

  // Funzione di login che chiama l'API e salva il token
  const handleLogin = async (credentials) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', credentials)
      const { token } = response.data
      login(token) // Usa la funzione login del context per salvare il token

      return { success: true }
    } catch (error) {
      console.error('Errore nel login:', error)
      return {
        success: false,
        message: error.response?.data?.message || 'Errore di autenticazione',
      }
    }
  }

  return { token, login: handleLogin, logout }
}

export default useAuth
