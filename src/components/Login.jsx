import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import axios from 'axios'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  //scrivendo così sto prendendo il login che viene scritto in value nel provider di AuthContext
  const { login } = useContext(AuthContext)

  const handleChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      const res = await axios.post(
        'http://localhost:8080/api/auth/login',
        credentials
      )
      //dato che in AuthContext ho inserito un parametro nella costante login devo inserire il token come parametro
      login(res.data.token)
      alert('Login effettuato con successo')
    } catch (error) {
      alert('Credenziali errate', error)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
