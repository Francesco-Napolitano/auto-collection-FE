import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/axiosInstance'

const useFetch = (url, method = 'GET', body = null) => {
  const { login } = useContext(AuthContext) // Per il login automatico dopo la registrazione
  const axiosInstance = useAxios()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (method !== 'GET') return // Evita chiamate automatiche per POST, PUT, DELETE
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
    console.log('Fetching errore', url)
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, body])

  const sendRequest = async (customBody = null) => {
    setLoading(true)
    setError(null)

    try {
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
