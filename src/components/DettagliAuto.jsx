import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const DettagliAuto = () => {
  const { id } = useParams()

  // Fetch dei dettagli dell'auto
  const { data: auto, loading, error } = useFetch(`auto/${id}`, 'GET')

  useEffect(() => {
    console.log('Dati Auto:', auto)
  }, [auto])

  if (loading && error) return <p>Caricamento</p>
  if (!auto)
    return (
      <div class="flex h-100 justify-center rounded-3xl w-full dark:bg-gray-800 items-center mx-auto">
        <div className="bg-[#22881B] rounded-lg text-lg text-white animate-pulse font-semibold px-5 py-2">
          Caricamento...
        </div>
      </div>
    )

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold mb-6">
        {auto?.modello || 'Modello non disponibile'}
      </h1>
      <p className="text-center text-gray-600">
        {auto?.brand || 'Brand non disponibile'}
      </p>

      {auto.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-6">
          <img
            key={auto.id}
            alt={auto?.modello || 'Auto'}
            className="h-40 rounded-lg shadow w-full object-cover"
          />
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          Nessuna immagine disponibile.
        </p>
      )}
    </div>
  )
}

export default DettagliAuto
