import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import videoSrc from '../assets/cars-women.mp4'
import FerrariSvg from '../utils/FerrariSvg'
import McLarenSvg from '../utils/McLarenSvg'
import Porsche from '../assets/Logo_della_Porsche.svg.png'

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
      <div className="mx-auto flex flex-col gap-10 pb-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="color-website">
            Scopri le Auto più Iconiche di Sempre
          </h1>
          <p className="text-lg text-gray-900 rounded-sm md:p-0 dark:text-gray-200 ">
            Un viaggio nel tempo tra le auto sportive che hanno segnato epoche e
            scritto <br />
            la storia dell’automobilismo!
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex items-center">
              <div className="border border-black dark:border-white">
                <FerrariSvg width="25" height="full" />
              </div>
              <p className="pl-2 text-gray-900 dark:text-gray-200">Ferrari</p>
            </div>
            <div className="flex items-center">
              <div>
                <McLarenSvg width="50" height="full" />
              </div>
              <p className="pl-2 text-gray-900 dark:text-gray-200">McLaren</p>
            </div>
            <div className="flex items-center">
              <div>
                <img src={Porsche} alt="porsche logo" className="w-10" />
              </div>
              <p className="pl-2 text-gray-900 dark:text-gray-200">Porsche</p>
            </div>
          </div>
        </div>
        <video className="hidden md:block w-full h-140 " autoPlay muted>
          <source className="rounded" src={videoSrc} />
        </video>
        <div className="bg-gray-50 dark:bg-gray-800 w-4/5 mx-auto p-10">
          <form class="max-w-sm mx-auto">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>
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
