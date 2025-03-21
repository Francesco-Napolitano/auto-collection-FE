import { useNavigate, useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'

const Ricerca = () => {
  const [searchParams] = useSearchParams()

  const {
    data: auto,
    loading,
    error,
  } = useFetch(`/auto/filtri?${searchParams.toString()}`, 'GET')

  useEffect(() => {
    console.log('Auto filtrate: ', auto, searchParams)
  }, [searchParams, auto])

  const [modelli, setModelli] = useState('')
  const navigate = useNavigate() // Hook per la navigazione

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

  if (loading) return <p>Caricamento</p>
  if (error) return <p>Errore nel caricamento.</p>
  if (!auto)
    return (
      <div class="flex items-center w-full justify-center mx-auto h-100 rounded-3xl dark:bg-gray-800 ">
        <div className="px-5 py-2 text-lg font-semibold text-white bg-[#22881B] rounded-lg animate-pulse">
          Caricamento...
        </div>
      </div>
    )

  return (
    <div className=" px-50 bg-white border-gray-200 dark:bg-gray-900 pt-30">
      <h1 className="!text-2xl text-start py-3 dark:text-gray-200">
        {auto.length} risultati della ricerca
      </h1>
      <div className="p-3 mb-5 flex flex-col items-start bg-white border-gray-200 dark:bg-gray-800 rounded-lg shadow-sm dark:border-gray-700 duration-300 transition text-gray-900 dark:text-gray-200 ">
        <div className="relative w-full block py-5">
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
              className="stop block w-full p-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 h-10 focus:ring-2 focus:ring-[#22881b] transition duration-500"
              placeholder="Cerca..."
              onChange={(e) => setModelli(e.target.value)}
              value={modelli}
            />
          </form>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 ">
        <div className="p-3 mb-5 flex flex-col items-start bg-white border-gray-200 dark:bg-gray-800 rounded-lg shadow-md dark:border-gray-700 duration-300 transition text-gray-900 dark:text-gray-200 col-span-1">
          <p>Filtri utilizzati ({searchParams.size})</p>
        </div>
        <div className="col-span-3 grid grid-cols-1 gap-6">
          {auto.length > 0 ? (
            auto.map((a) => (
              <div className="p-5 flex flex-col items-start bg-white border-gray-200 dark:bg-gray-800 rounded-lg shadow-md dark:border-gray-700 duration-300 transition text-gray-900 dark:text-gray-200 col-span-3 ">
                <ul>
                  <li key={a.id}>
                    {a.nome} - {a.modello} - Prezzo: {a.prezzo}€
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <p>Nessuna auto trovata</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Ricerca
