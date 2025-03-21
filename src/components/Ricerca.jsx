import { Link, useNavigate, useSearchParams } from 'react-router-dom'
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
      <div className="grid grid-cols-4 gap-3 pt-10">
        <div className=" mb-5 flex flex-col items-start  text-gray-900 dark:text-gray-200 col-span-1">
          <div className="p-3 shadow-md w-full flex flex-col items-start border-1 bg-white border-gray-200 dark:bg-gray-800 rounded-lg  dark:border-gray-700 duration-300 transition">
            <p>Filtri utilizzati ({searchParams.size})</p>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 gap-10">
          {auto.length > 0 ? (
            auto.map((a) => (
              <div className="p-5 flex items-start bg-white border-gray-200 dark:bg-gray-800 rounded-lg shadow-md dark:border-gray-700 duration-300 transition text-gray-900 dark:text-gray-200 col-span-3 border-1 gap-3">
                <Link to={`/auto/${a.id}`}>
                  <div className="flex flex-col items-start w-86 ">
                    <h3 className="text-gray-900 text-2xl dark:text-gray-200 ">
                      {a.nome} {a.modello}
                    </h3>
                    <div className="w-70 pt-3">
                      <img src={a.immagini[0].immagineUrl} alt={auto.modello} />
                    </div>
                  </div>
                </Link>
                <div className="flex flex-col text-gray-900 dark:text-gray-200 items-start pr-25 h-full border-r-1 grow basis-70 justify-center ">
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
                <div className="w-60 flex flex-col bg-gray-400  text-gray-900 dark:text-gray-200 justify-center  items-center h-full">
                  <span className="text-gray-50 dark:text-gray-200 flex items-center gap-1">
                    <svg
                      class="h-5 text-gray-00 w-5 dark:text-gray-200 mr-1"
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
                      class="h-5 w-5 mb-0.5 mr-1"
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
