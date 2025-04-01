import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { oauthLogin } = useAuth() // Usa il metodo login di useAuth
  const { sendRequest, loading, error } = useFetch('/api/auth/register', 'POST')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await sendRequest(formData)
    if (success) {
      navigate('/login') // Reindirizza alla home dopo la registrazione
    }
  }

  if (loading)
    return (
      <div
        role="status"
        className="h-screen flex items-center gap-2 justify-center"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#22881B]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
        <span className="">Caricamento</span>
      </div>
    )

  return (
    <div className="pt-60 md:pt-35  bg-white dark:bg-gray-900 p-6">
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid gap-8 w-100">
          <section className="bg-gradient-to-r from-[#2a9d8f] to-[#22881b] rounded-3xl">
            <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
              <h1 className="text-5xl font-bold text-center cursor-default dark:text-gray-200 text-gray-900">
                Register
              </h1>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="text-start pt-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg dark:text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="border p-3 shadow-md dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 border-gray-200 rounded-lg w-full  transition transform hover:scale-105 duration-300 ring-[#22881b]"
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div className="text-start ">
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
                    value={formData.username}
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
                    value={formData.password}
                  />
                </div>
                <button
                  className="w-full p-3 mt-4 text-white bg-gradient-to-r from-[#2a9d8f] to-[#22881b] rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#22881b]"
                  type="submit"
                >
                  REGISTRATI
                </button>
              </form>
              <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-200">
                <p>
                  Hai già un account?{' '}
                  <Link to="/login">
                    <a
                      href="#"
                      className="text-blue-400 transition hover:underline"
                    >
                      Accedi
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
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                  <img
                    className="w-6 h-6 dark:invert"
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

export default Register
