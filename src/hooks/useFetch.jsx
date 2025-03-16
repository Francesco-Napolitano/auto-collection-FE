import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/axiosInstance'

const useFetch = (url, method = 'GET', body = null) => {
  const axiosInstance = useAxios()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { login } = useContext(AuthContext) // Per il login automatico dopo la registrazione

  useEffect(() => {
    if (method !== 'GET') return // Evita chiamate automatiche per POST, PUT, DELETE ed esce direttamente dalla funzione useEffect
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await axiosInstance.get(url)
        setData(response.data)
      } catch (err) {
        setError(err.response?.data?.message || 'Errore nel caricamento')
        // ALTRIMENTO IL MODO PIù LUNGO PER SCRIVERE E' QUESTO:
        // if (err.response && err.response.data && err.response.data.message) {
        //   setError(err.response.data.message)
        // } else {
        //   setError('Errore nel caricamento')
        // }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, body])

  const sendRequest = async (customBody = null) => {
    setLoading(true)
    setError(null)

    try {
      // Quest' await invia una richiesta HTTP al server usando axiosInstance e specificando il metodo
      // (POST,GET,PUT,DELETE) , l'URL e infine il body della richiesta (se presente, ed è utile per la crezione di un
      //  nuovo utente)
      const response = await axiosInstance({
        method,
        url,
        data: customBody || body,
      })

      if (
        method === 'POST' &&
        url === '/api/auth/register' &&
        response.data.token
      ) {
        login(response.data.token) // Auto-login dopo registrazione
      }

      return response.data
    } catch (err) {
      setError(err.response?.data?.message || 'Errore nella richiesta')
      return null
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, sendRequest }
}

export default useFetch
