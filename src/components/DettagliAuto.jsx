import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DettagliAuto = () => {
  const { id } = useParams()
  const [auto, setAuto] = useState(null)
  const [img, setImg] = useState([])

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJMdWNhIFByb3ZlIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTc0MTcwMjk1NCwiZXhwIjoxNzQxNzIyOTU0fQ.YCvYgNSP4yG4H9gryxNweQmPsq3AwWcuGtv6tXcoku0'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        }

        // eseguo due richieste in parallelo e una serve a riportare un auto specifica mentre l'altra ritorna le immagini di quell'auto. Dato che l'id che viene inserito dentro, viene passato come parametro nel backend e lo usa per riportare tutte le immagini con "autoId" uguale all'id dell'automobile
        const [resAuto, resImg] = await Promise.all([
          axios.get(`http://localhost:8080/auto/${id}`, { headers }),
          axios.get(`http://localhost:8080/immagini/auto/${id}`, { headers }),
        ])

        console.log(resImg.data)
        setAuto(resAuto.data)
        setImg(resImg.data)
      } catch (error) {
        console.error('Errore nel caricamento:', error)

        if (error.response) {
          console.error('Risposta del server:', error.response.data)
          console.error('Status Code:', error.response.status)
        } else if (error.request) {
          console.error('Nessuna risposta ricevuta dal server.')
        } else {
          console.error('Errore nella richiesta:', error.message)
        }
      }
    }

    fetchData()
  }, [id])

  if (!auto) return <p className="text-center text-gray-500">Caricamento...</p>

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
