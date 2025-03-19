import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const DettagliAuto = () => {
  const { id } = useParams()

  // Fetch dei dettagli dell'auto
  const { data: auto, loading, error } = useFetch(`auto/${id}`, 'GET')

  // Fetch delle immagini dell'auto
  const {
    data: img = [],
    loading: imgLoading,
    error: imgError,
  } = useFetch(`immagini/auto/${id}`, 'GET')

  useEffect(() => {
    console.log('Dati Auto:', auto)
    console.log('Immagini Auto:', img)
  }, [auto, img])

  if (loading && error && !auto)
    return (
      <div class="flex items-center justify-center w-56 h-56 rounded-3xl dark:bg-gray-800 ">
        <div className="px-5 py-2 text-lg font-semibold text-white bg-[#22881B] rounded-lg animate-pulse">
          Caricamento...
        </div>
      </div>
    )

  if (imgLoading && imgError && !img)
    return (
      <div class="flex items-center justify-center w-56 h-56 rounded-3xl dark:bg-gray-800 ">
        <div className="px-5 py-2 text-lg font-semibold text-white bg-[#22881B] rounded-lg animate-pulse">
          Caricamento...
        </div>
      </div>
    )

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        {auto?.modello || 'Modello non disponibile'}
      </h1>
      <p className="text-center text-gray-600">
        {auto?.brand || 'Brand non disponibile'}
      </p>

      {Array.isArray(img) && img.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {img.map((image) => (
            <img
              key={image.id}
              src={image.immagineUrl}
              alt={auto?.modello || 'Auto'}
              className="w-full h-40 object-cover rounded-lg shadow"
            />
          ))}
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
