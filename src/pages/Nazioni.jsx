import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nazioni = () => {
  const [nazioni, setNazioni] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/nazioni')
        console.log(res.data)
        setNazioni(res.data)
      } catch (error) {
        console.error('Errore nel caricamento delle nazioni:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container mx-auto">
      <h1>Nazioni</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {nazioni.length > 0 ? (
          nazioni.map((nazione) => (
            <div key={nazione.id} className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{nazione.name}</h2>
              <Link to={`/nazioni/${nazione.id}`}>
                <img src={nazione.imageNation} alt={nazione.name} />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Nessuna nazione trovata.</p>
        )}
      </div>
    </div>
  )
}

export default Nazioni
