import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const DettagliAuto = () => {
  const { id } = useParams()
  const { data: auto, loading, error } = useFetch(`auto/${id}`)
  const {
    data: img,
    loading: imgLoading,
    error: imgError,
  } = useFetch(`immagini/auto/${id}`)

  if (loading || imgLoading) return <p>Caricamento...</p>
  if (error || imgError) return <p>Errore nel caricamento.</p>
  if (!auto) return <p>Nessun dato trovato per questa auto.</p>

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">{auto.modello}</h1>
      <p className="text-center text-gray-600">{auto.brand}</p>

      {img.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {img.map((image) => (
            <img
              key={image.id}
              src={image.immagineUrl}
              alt={auto.modello}
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
