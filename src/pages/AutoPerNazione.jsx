import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const AutoPerNazione = () => {
  const { id } = useParams()
  const [nazione, setNazione] = useState({})

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJMdWNhIFByb3ZlIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTc0MTcwMjk1NCwiZXhwIjoxNzQxNzIyOTU0fQ.YCvYgNSP4yG4H9gryxNweQmPsq3AwWcuGtv6tXcoku0'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resNazione = await axios.get(
          `http://localhost:8080/nazioni/${id}/automobili`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        console.log(resNazione.data)
        setNazione(resNazione.data)
      } catch (error) {
        console.error('Errore nel caricamento:', error)
      }
    }
    fetchData()
  }, [id, token])

  if (!nazione)
    return <p className="text-center text-gray-500">Caricamento...</p>

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
