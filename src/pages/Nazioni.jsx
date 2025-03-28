import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const Nazioni = () => {
  const { data: nazione, loading, error } = useFetch('/nazioni', 'GET')

  useEffect(() => {
    if (nazione) console.log('Dati Nazioni:', nazione)
  }, [nazione])

  if (loading) return <p>Caricamento</p>
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
