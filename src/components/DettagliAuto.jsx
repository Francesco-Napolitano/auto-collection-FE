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

  if (loading || imgLoading) return <p>Caricamento...</p>
  if (error || imgError) return <p>Errore nel caricamento.</p>
  if (!auto) return <p>Nessun dato trovato per questa auto.</p>

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
