import React, { Children, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  // Il token è il valore del token memorizzato nel Provider di AuthContext
  const { token } = useContext(AuthContext)

  // se l'utente è loggato, restituisce i children (la rotta protetta)
  // altrimenti, reindirizza alla pagina di login
  return token ? children : <Navigate to="/login" />
}

export default ProtectedRoute
