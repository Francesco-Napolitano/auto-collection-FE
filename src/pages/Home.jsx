import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import videoSrc from '../assets/cars-women.mp4'

const Home = () => {
  const { data: auto, loading, error } = useFetch('/auto', 'GET')

  useEffect(() => {
    if (auto) console.log('Tutte le Auto:', auto)
  }, [auto])

  if (loading) return <p>Caricamento...</p>
  if (error) return <p>Errore nel caricamento.</p>
  if (!auto) return <p>Nessun dato trovato per questa auto.</p>

  return (
    <div className="pt-10 mx-auto bg-white border-gray-200 dark:bg-gray-900">
      <div className="mx-auto flex flex-col gap-10">
        <div>
          <h1 className="color-website pb-5">
            Scopri le Auto più Iconiche di Sempre
          </h1>
          <p className="text-lg text-gray-900 rounded-sm md:p-0 dark:text-gray-200 ">
            Un viaggio nel tempo tra le auto sportive che hanno segnato epoche e
            scritto <br />
            la storia dell’automobilismo!
          </p>
        </div>
        <video className="w-full h-140" autoPlay muted>
          <source src={videoSrc} />
        </video>
      </div>
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
