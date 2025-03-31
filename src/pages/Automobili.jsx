import { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Automobili = () => {
  //richiama tutte le automobili del database
  const { data: auto, loading, error, sendRequest } = useFetch('/auto', 'GET')

  const { token, roles } = useContext(AuthContext)

  const [deleteCar, setDeleteCar] = useState(false)

  const handleDelete = async (id) => {
    if (!window.confirm('Sei sicuro di voler eliminare questa auto?')) return

    setDeleteCar(true)

    const result = await sendRequest(null, `/auto/${id}`) // Chiamata DELETE con useFetch

    if (result) {
      alert('Auto eliminata con successo!')
      window.location.reload() // Ricarica la pagina per aggiornare la lista
    } else {
      alert("Errore durante l'eliminazione")
    }

    setDeleteCar(false)
  }

  const [loadedImages, setLoadedImages] = useState({})

  //onClick function che colora il cuore
  const favouriteColor = (ev) => {
    ev.currentTarget.classList.toggle('fill-red-500')
  }

  useEffect(() => {
    auto ? console.log('Automobili sezione:', auto) : 'Nessun auto'
  })

  //funzione che si occupa del caricamento delle immagini delle auto
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }))
  }

  if (loading)
    return (
      <div
        role="status"
        className="h-screen flex items-center gap-2 justify-center"
      >
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#22881B]"
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
        <span class="sr-only">Loading...</span>
        <span className="">Caricamento</span>
      </div>
    )

  if (error) return <p>Errore nel caricamento.</p>
  if (!auto)
    return (
      <div class="flex h-100 justify-center rounded-3xl w-full dark:bg-gray-800 items-center mx-auto">
        <div className="bg-[#22881B] rounded-lg text-lg text-white animate-pulse font-semibold px-5 py-2">
          Caricamento...
        </div>
      </div>
    )
  return (
    <section className="bg-white border-gray-200 dark:bg-gray-900 md:pt-25 mx-auto pt-42 ">
      <div className="container flex flex-col justify-center gap-10 items-center  mx-auto px-6 py-8">
        <h1 className="color-website self-start">
          Esplora le Auto più Iconiche di Sempre
        </h1>
        <div className="grid grid-cols-1 gap-x-5  gap-y-15 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4">
          {auto.length > 0 ? (
            auto.map((automobile) => (
              <Link
                to={`/auto/${automobile.id}`}
                onClick={(e) => {
                  if (
                    e.target.tagName === 'svg' ||
                    e.target.parentElement.tagName === 'svg' ||
                    e.target.tagName === 'button'
                  ) {
                    e.preventDefault()
                  }
                }}
              >
                <div
                  className="flex flex-col bg-white border border-gray-200 justify-center rounded-lg shadow-sm cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:from-gray-700 duration-300 hover:bg-gradient-to-tl hover:from-gray-200 items-center px-3 py-5 transition"
                  key={automobile.id}
                >
                  <img
                    className={`object-cover rounded-t-lg w-80 mb-2 md:h-55 transition-opacity duration-500 ${
                      loadedImages[automobile.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={automobile.immagini[2].immagineUrl}
                    alt={automobile.modello}
                    onLoad={() => handleImageLoad(automobile.id)}
                  />
                  <div className="flex flex-col text-start w-full gap-2">
                    <div className="flex justify-between py-1">
                      <div>
                        <p className="text-gray-800 text-sm text-start dark:text-gray-400 font-mono font-stretch-150% uppercase">
                          {automobile.nome}
                        </p>
                        <p className="text-gray-900 dark:text-gray-200 font-bold mb-3">
                          {automobile.modello}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        stroke="currentColor"
                        class="size-6 text-gray-900 dark:text-gray-200"
                        onClick={(e) => {
                          favouriteColor(e)
                        }}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="flex text-gray-900 dark:text-gray-200 items-center g">
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
                        {automobile.anno}
                      </span>
                      <span className="flex text-gray-900 dark:text-gray-200 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.2"
                          stroke="currentColor"
                          class="h-5 w-5 mr-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                          />
                        </svg>
                        {automobile.potenza} CV
                      </span>
                      <span className="flex text-gray-900 dark:text-gray-200 items-center">
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
                        {automobile.velocitaMax} km/h
                      </span>
                    </div>
                  </div>
                  {token && roles.includes('ROLE_ADMIN') && (
                    <div>
                      <Link to={`/modifiche/auto/${automobile.id}`}>
                        <button className="ml-4 px-3 mt-4 py-2 !bg-green-600 text-white rounded hover:bg-red-700">
                          ✏️Modifica
                        </button>
                      </Link>
                      <button
                        className="ml-4 px-3 mt-4 py-2 !bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={() => handleDelete(automobile.id)}
                        disabled={deleteCar}
                      >
                        {deleteCar ? 'Eliminazione...' : '🗑️ Elimina'}
                      </button>
                    </div>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <p> Nessun auto disponibile </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Automobili
