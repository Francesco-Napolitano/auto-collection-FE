import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/axiosInstance'

const useAuth = () => {
  const { token, login, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const axiosInstance = useAxios()

  // Funzione di login con credenziali classiche
  const handleLogin = async (credentials) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', credentials)
      const { token } = response.data
      login(token) // Salva il token nel context
      return { success: true }
    } catch (error) {
      console.error('Errore nel login:', error)
      return {
        success: false,
        message: error.response?.data?.message || 'Errore di autenticazione',
      }
    }
  }

  // Funzione per avviare il login con OAuth2
  const oauthLogin = async (provider) => {
    window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`
  }

  // Funzione per ottenere il token JWT dal backend dopo l'OAuth2
  const fetchOAuthToken = async () => {
    try {
      const response = await axiosInstance.get('/api/oauth2/token', {
        withCredentials: true,
      })

      if (response.status === 200 && response.data.token) {
        login(response.data.token) //Salva il token in AuthContext
        navigate('/')
      }
    } catch (error) {
      console.error('Errore nel recupero del token OAuth2:', error)
    }
  }

  // Quando il componente viene montato, controlla se il backend ha restituito un token OAuth2
  useEffect(() => {
    fetchOAuthToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { token, login: handleLogin, logout, oauthLogin }
}

export default useAuth
