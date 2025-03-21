import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

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
    <div className=" px-30 bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-col items-start">
        <h1 className="!text-2xl mt-30">
          {auto.length} risultati della ricerca
        </h1>
        <ul>
          {auto.length > 0 ? (
            auto.map((a) => (
              <li key={a.id}>
                {a.nome} - {a.modello} - Prezzo: {a.prezzo}€
              </li>
            ))
          ) : (
            <p>Nessuna auto trovata</p>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Ricerca
