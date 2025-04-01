import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useState } from 'react'

const Login = () => {
  const { login, oauthLogin } = useAuth() // Usa il metodo login di useAuth
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const result = await login(credentials) // Richiama la funzione login in AuthContext e inserisce come parametro le credenziali
    if (result.success) {
      navigate('/') // Vai alla home dopo il login
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="pt-60 md:pt-35 bg-white dark:bg-gray-900 p-6">
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid gap-8 w-100">
          <section className="bg-gradient-to-r from-[#2a9d8f] to-[#22881b] rounded-3xl">
            <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
              <h1 className="text-5xl font-bold text-center cursor-default dark:text-gray-200 text-gray-900">
                Login
              </h1>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="text-start pt-3">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-lg dark:text-gray-200"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    className="border p-3 shadow-md dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 border-gray-200 rounded-lg w-full  transition transform hover:scale-105 duration-300 ring-[#22881b]"
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    onChange={handleChange}
                    value={credentials.username}
                  />
                </div>
                <div className="text-start">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lg dark:text-gray-200"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    className="border p-3 shadow-md dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 border-gray-200 rounded-lg w-full  transition transform hover:scale-105 duration-300 ring-[#22881b]"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={handleChange}
                    value={credentials.password}
                  />
                </div>
                <button
                  className="w-full p-3 mt-4 text-white bg-gradient-to-r from-[#2a9d8f] to-[#22881b] rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#22881b]"
                  type="submit"
                >
                  ACCEDI
                </button>
              </form>
              <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-200">
                <p>
                  Non hai un account?{' '}
                  <Link to="/register">
                    <a
                      href="#"
                      className="text-blue-400 transition hover:underline"
                    >
                      Registrati
                    </a>
                  </Link>
                </p>
              </div>
              <div
                id="third-party-auth"
                className="flex justify-center gap-4 mt-5"
              >
                <button
                  onClick={() => oauthLogin('google')}
                  className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                >
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                    alt="Google"
                  />
                </button>
                <button
                  onClick={() => oauthLogin('github')}
                  className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                >
                  <img
                    className="w-6 h-6 "
                    loading="lazy"
                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                    alt="GitHub"
                  />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Login
