import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const Nazioni = () => {
  const { data: nazione, loading, error } = useFetch('/nazioni', 'GET')

  useEffect(() => {
    if (nazione) console.log('Dati Nazioni:', nazione)
  }, [nazione])

  if (loading)
    return (
      <div
        role="status"
        className="h-screen flex items-center gap-2 justify-center bg-white dark:bg-gray-900"
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
        <span className="text-gray-900 dark:text-gray-200">Caricamento</span>
      </div>
    )

  if (error) return <p>Errore nel caricamento.</p>
  if (!nazione)
    return (
      <div class="flex items-center w-full justify-center mx-auto h-100 rounded-3xl dark:bg-gray-800 ">
        <div className="px-5 py-2 text-lg font-semibold text-white bg-[#22881B] rounded-lg animate-pulse">
          Caricamento...
        </div>
      </div>
    )
  return (
    <section className=" max-sm:mt-17 pt-30 mx-auto bg-white border-gray-200 dark:bg-gray-900 pb-5">
      <div className="container flex flex-col items-center justify-center gap-10 px-6 py-8 mx-auto">
        <h1 className="color-website ">Nazioni</h1>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {nazione.length > 0 ? (
            nazione
              .sort((a, b) => a.name.localeCompare(b.name)) // Ordina alfabeticamente
              .map((nazioni) => (
                <Link to={`/nazioni/${nazioni.id}`}>
                  <div
                    key={nazioni.id}
                    className="cursor-pointer flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 pb-3 justify-center transition duration-300 hover:bg-gradient-to-tl hover:from-gray-200 dark:hover:from-gray-700"
                  >
                    <div className="h-full rounded-t-lg px-2 pt-2 pb-1  border-1 border-gray-100  dark:bg-gray-900">
                      <img
                        src={nazioni.imageNation}
                        alt={nazioni.name}
                        className="w-38 h-25 object-contain"
                      />
                    </div>
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                      {nazioni.name}
                    </p>
                  </div>
                </Link>
              ))
          ) : (
            <p className="text-gray-500">Nessun brand disponibile</p>
          )}
        </div>
      </div>
    </section>
  )
}
export default Nazioni
