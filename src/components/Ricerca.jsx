import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'

const Ricerca = () => {
  const [searchParams] = useSearchParams()

  const {
    data: auto,
    loading,
    error,
  } = useFetch(`/auto/filtri?${searchParams.toString()}`, 'GET')

  const [modelli, setModelli] = useState('')
  const navigate = useNavigate() // Hook per la navigazione

  const buildQueryParams = () => {
    const params = new URLSearchParams()

    if (modelli) {
      const modelloMaiuscolo =
        modelli.charAt(0).toUpperCase() + modelli.slice(1).toLowerCase()
      params.append('modello', modelloMaiuscolo)
    }
    return params.toString() // Restituisce la query string
  }

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/ricerca?${buildQueryParams()}`)
  }

  if (loading)
    return (
      <div
        role="status"
        className="h-screen flex items-center gap-2 justify-center bg-white dark:bg-gray-900"
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
        <span className="text-gray-900 dark:text-gray-200">Caricamento</span>
      </div>
    )
  if (error) return <p>Errore nel caricamento.</p>
  if (!auto)
    return (
      <div className="flex items-center w-full justify-center mx-auto h-100 rounded-3xl dark:bg-gray-800 ">
        <div className="px-5 py-2 text-lg font-semibold text-white bg-[#22881B] rounded-lg animate-pulse">
          Caricamento...
        </div>
      </div>
    )

  return (
    <div className="px-5 lg:px-30 bg-white border-gray-200 dark:bg-gray-900 py-38">
      <h1 className="!text-2xl text-start py-3 dark:text-gray-200 pt-20 sm:pt-0">
        {auto.length} risultati della ricerca
      </h1>
      <div className="p-3 mb-5 flex flex-col items-start bg-white border-gray-200 dark:bg-gray-800 rounded-lg shadow-sm dark:border-gray-700 duration-300 transition text-gray-900 dark:text-gray-200 border-1">
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 pt-10">
        <div className=" mb-5 flex flex-col items-start  text-gray-900 dark:text-gray-200 col-span-1">
          <div className="p-3 shadow-md w-full flex flex-col items-start border-1 bg-white border-gray-200 dark:bg-gray-800 rounded-lg  dark:border-gray-700 duration-300 transition">
            <p>Filtri utilizzati ({searchParams.size})</p>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 gap-10">
          {auto.length > 0 ? (
            auto.map((a) => (
              <div className="p-5 flex max-md:flex-col items-center lg:items-start bg-white border-gray-200 dark:bg-gray-800 rounded-lg shadow-md dark:border-gray-700 duration-300 transition text-gray-900 dark:text-gray-200 col-span-3 border-1 gap-3">
                <Link to={`/auto/${a.id}`}>
                  <div className="flex flex-col items-start  lg:w-86 ">
                    <h3 className="text-gray-900 text-2xl dark:text-gray-200 ">
                      {a.nome} {a.modello}
                    </h3>
                    <div className="w-70 pt-3">
                      <img
                        src={a.immagini[2].immagineUrl}
                        alt={auto.modello}
                        className="h-45 object-cover"
                      />
                    </div>
                  </div>
                </Link>
                <div className="flex flex-col text-gray-900 dark:text-gray-200 items-start   h-full xl:border-r-1 grow sm:basis-70 justify-start lg:justify-center ">
                  <p className="font-semibold text-2xl pt-10 pb-5">
                    {new Intl.NumberFormat('it-IT', {
                      style: 'decimal',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(a.prezzo)}{' '}
                    €
                  </p>
                  <p>
                    Posizione motore:{' '}
                    <span className="font-semibold">
                      {a.posizioneMotore.toLowerCase()}
                    </span>
                  </p>
                  <p>
                    Trazione:{' '}
                    <span className="font-semibold">
                      {a.trazione.toLowerCase()}
                    </span>
                  </p>
                  <p>
                    Motore:{' '}
                    <span className="font-semibold">
                      {a.strutturaMotore} {a.motore.toLowerCase()}
                    </span>
                  </p>
                </div>
                <div className="hidden  xl:flex w-60  flex-col bg-gray-400  text-gray-900 dark:text-gray-200 justify-center  items-center h-full">
                  <span className="text-gray-50 dark:text-gray-200 flex items-center gap-1">
                    <svg
                      className="h-5 text-gray-00 w-5 dark:text-gray-200 mr-1"
                      viewBox="0 0 24 24"
                      stroke-width="1.2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {' '}
                      <path stroke="none" d="M0 0h24v24H0z" />{' '}
                      <circle cx="7" cy="17" r="2" />{' '}
                      <circle cx="17" cy="17" r="2" />{' '}
                      <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                    </svg>{' '}
                    {a.carrozzeria}
                  </span>{' '}
                  <span className="text-gray-50 dark:text-gray-200 flex items-center gap-1">
                    <svg
                      className="h-5 w-5 mb-0.5 mr-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {' '}
                      <path stroke="none" d="M0 0h24v24H0z" />{' '}
                      <rect x="4" y="5" width="16" height="16" rx="2" />{' '}
                      <line x1="16" y1="3" x2="16" y2="7" />{' '}
                      <line x1="8" y1="3" x2="8" y2="7" />{' '}
                      <line x1="4" y1="11" x2="20" y2="11" />{' '}
                      <rect x="8" y="15" width="2" height="2" />
                    </svg>{' '}
                    {a.anno}
                  </span>{' '}
                </div>
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
