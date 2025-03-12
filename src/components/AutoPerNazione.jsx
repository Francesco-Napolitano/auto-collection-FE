import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const AutoPerNazione = () => {
  const { id } = useParams()
  const [nazione, setNazione] = useState({})

  useEffect(() => {
    //useEffect per creare la funzione che restituisce le auto legate alla nazione, utilizza il metodo creato in AutoRepository
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem('token')
        if (!token) {
          throw new Error('Token non trovato')
        }
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
  }, [id])

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
