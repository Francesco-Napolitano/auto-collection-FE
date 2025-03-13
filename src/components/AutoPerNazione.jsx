import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const AutoPerNazione = () => {
  const { id } = useParams()
  const {
    data: nazione,
    loading,
    error,
  } = useFetch(`nazioni/${id}/automobili`, 'GET')

  useEffect(() => {
    if (nazione) console.log('Dati Auto:', nazione)
  }, [nazione])

  if (!nazione) return null
  if (loading) return <p>Caricamento...</p>
  if (error) return <p>Errore nel caricamento.</p>

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Auto per Nazione: <br /> {nazione.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {nazione.length > 0 ? (
          nazione.map((car) => (
            <div key={car.id} className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{car.modello}</h2>
              <p className="text-gray-600">{car.brand}</p>
              <Link
                to={`/auto/${car.id}`}
                className="text-blue-500 mt-2 inline-block"
              >
                Vedi Dettagli
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Nessuna auto trovata.</p>
        )}
      </div>
    </div>
  )
}

export default AutoPerNazione
