import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import axios from 'axios'

//quest è un react hook personalizzato e serve a creare un'istanza di axios con l'header Authorization settato con il token dell'utente loggato
//il token viene preso dal context AuthContext
const useAxios = () => {
  //scrivendo così sto prendendo il token che viene scritto in value nel provider di AuthContext
  const { token } = useContext(AuthContext)

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  })

  //Qui stiamo intercettando la richiesta prima che venga effettuata e settiamo l'header Authorization con il token prima di inviarla, in questo modo prima di ogni richiesta avrà sempre il token aggiornato
  axiosInstance.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  return axiosInstance
}

export default useAxios
