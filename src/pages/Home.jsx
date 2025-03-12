import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [auto, setAuto] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/auto')
        console.log(res.data)
        setAuto(res.data) // res.data è già il JSON ricevuto dalla API
      } catch (error) {
        console.error('Errore nel caricamento delle auto:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Lista Auto</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {auto.length > 0 ? (
          auto.map((car) => (
            <div key={car.id} className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">
                {car.nome} {car.modello}
              </h2>
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

export default Home
