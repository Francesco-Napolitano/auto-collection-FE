import React, { Children, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  // token is the value of the token stored in the AuthContext Provider
  // if the user is logged in, the token is not null or undefined
  // otherwise, the user is not logged in and the token is null or undefined
  const { token } = useContext(AuthContext)

  // if the user is logged in, return the children (the protected route)
  // otherwise, redirect to the login page
  return token ? children : <Navigate to="/api/auth/login" />
}

export default ProtectedRoute
