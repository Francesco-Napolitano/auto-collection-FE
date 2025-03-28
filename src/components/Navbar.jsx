import { Link, useNavigate } from 'react-router-dom'
import logoWebsite from '../assets/logoauto.png'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

const Navbar = () => {
  const [modelli, setModelli] = useState('')
  const navigate = useNavigate() // Hook per la navigazione

  const { token, roles } = useContext(AuthContext)

  const buildQueryParams = () => {
    const params = new URLSearchParams()

    if (modelli) {
      const modelloCapitalizzato =
        modelli.charAt(0).toUpperCase() + modelli.slice(1).toLowerCase()
      params.append('modello', modelloCapitalizzato)
    }
    return params.toString() // Restituisce la query string
  }

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/ricerca?${buildQueryParams()}`)
  }
  return (
    <nav className="w-full bg-white border-gray-200 dark:bg-gray-900 fixed top-0 z-10 overflow-y-hidden mb-2">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-center max-[464px]:pb-8 min-[464px]:justify-between mx-auto px-2">
        <a
          href="/"
          className="flex items-center justify-baseline space-x-3 rtl:space-x-reverse"
        >
          <img src={logoWebsite} className="w-35  h-20" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 ">
          <button
            id="theme-toggle"
            type="button"
            className=" !bg-transparent dark:hover:bg-gray-700 rounded-3xl p-2 px-3 border border-gray-300 dark:border-gray-600 transition duration-500"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="hidden w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="relative  block ml-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                id="search-navbar"
                className="stop block mr-2 w-40 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 h-10 focus:ring-2 focus:ring-[#22881b] transition duration-500"
                placeholder="Search..."
                onChange={(e) => setModelli(e.target.value)}
                value={modelli}
              />
            </form>
          </div>
          {token ? (
            <Link to="/logout">
              <button class="group flex items-center justify-start w-11 h-11 !bg-[#22881b] rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg  hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
                <div class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                  <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div class="absolute right-5 transform translate-x-full !hover:text-gray-200 opacity-0 text-gray-200 text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Logout
                </div>
              </button>
            </Link>
          ) : (
            <button
              type="button"
              class="text-[#22881b] bg-blue-700 ring-2 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700  ml-3"
            >
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
        <ul className="flex grow justify-center   font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:color-website md:p-0 md:dark:hover:color-website dark:text-gray-200 dark:hover:color-website dark:hover:color-website md:dark:hover:color-website dark:border-gray-700"
              aria-current="page"
            >
              <Link to="/auto">Auto</Link>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Preferiti
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <Link to="/brand">Brand</Link>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <Link to="/nazioni">Nazioni</Link>
            </a>
          </li>
          {roles.includes('ROLE_ADMIN') && (
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <Link to="/creazione/auto">Aggiungi un auto</Link>
              </a>
            </li>
          )}
        </ul>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
