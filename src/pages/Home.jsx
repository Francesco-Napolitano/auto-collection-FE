import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import videoSrc from '../assets/cars-women.mp4'
import FerrariSvg from '../utils/FerrariSvg'
import McLarenSvg from '../utils/McLarenSvg'
import Porsche from '../assets/Logo_della_Porsche.svg.png'
import Mercedes from '../assets/Mercedes-Logo.svg.png'
import Bugatti from '../assets/Bugatti_Logo.png'
import Ferrari from '../assets/Ferrari-250-GTO-at-Goodwood-3.webp'
import Jaguar from '../assets/jaguar-xj220-1-1360x765.webp'
import McLaren from '../assets/McLaren-P1_autosprint.ch_.jpg'
import McLarenArtura from '../assets/2025_mclaren_artura_coupe_base_fq_oem_1_1600.avif'
import Chiron from '../assets/2016030101_Bugatti_Chiron.jpg'
import PorscheTurbo from '../assets/s20-1418-fine-jpg.webp'
import '../styles/homepage.css'

const Home = () => {
  const { data: auto, loading, error } = useFetch('/auto', 'GET')

  const [brandSelezionato, setBrandSelezionato] = useState(null)
  const [modelli, setModelli] = useState([])

  const brandUnici = [...new Set(auto?.map((auto) => auto.nome))]
  const nazioniUniche = [...new Set(auto?.map((auto) => auto.nazione.name))]

  useEffect(() => {
    if (brandSelezionato) {
      const modelliFiltrati = auto
        ?.filter((auto) => auto.nome === brandSelezionato)
        .map((auto) => auto.modello)
      setModelli(modelliFiltrati || [])
    } else {
      setModelli([])
    }
  }, [brandSelezionato, auto])

  useEffect(() => {
    if (auto) console.log('Tutte le Auto:', auto)
  }, [auto])

  if (loading) return <p>Caricamento...</p>
  if (error) return <p>Errore nel caricamento.</p>
  if (!auto) return <p>Nessun dato trovato per questa auto.</p>

  return (
    <div className="pt-20 mx-auto bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="mx-auto flex flex-col gap-10 pb-10">
        <section className="flex flex-col items-center gap-5">
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
        </section>
        <video className="hidden md:block w-full h-140 " loop autoPlay muted>
          <source className="rounded" src={videoSrc} />
        </video>
        <section className="bg-white border border-gray-200 rounded-lg shadow-xs dark:bg-gray-800 dark:border-gray-700 w-4/5 mx-auto py-10 md:p-10 flex justify-around">
          <form className="grid grid-cols-2 lg:grid-cols-3 w-4/5 gap-3">
            <label htmlFor="brand" className="sr-only">
              Marca
            </label>
            <select
              id="brand"
              value={brandSelezionato}
              onChange={(e) => setBrandSelezionato(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#22881b] focus:border-[#22881b] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-[#22881b] dark:focus:border-[#22881b]"
            >
              <option value="">Marca</option>
              {brandUnici.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <label htmlFor="modello" className="sr-only">
              Modello
            </label>
            <select
              id="modello"
              disabled={!brandSelezionato}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#22881b] focus:border-[#22881b] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-[#22881b] dark:focus:border-[#22881b] disabled:opacity-50 z-1 "
            >
              <option value="">Modello</option>
              {modelli.map((modello) => (
                <option key={modello} value={modello}>
                  {modello}
                </option>
              ))}
            </select>
            <label for="number-input" class="sr-only">
              Select a number:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#22881b] focus:border-[#22881b] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-[#22881b] dark:focus:border-[#22881b]"
              placeholder="A partire da (€)"
              min={0}
            />
            <label for="number-input" class="sr-only">
              Select a number:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#22881b] focus:border-[#22881b] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-[#22881b] dark:focus:border-[#22881b]"
              placeholder="Anno da"
              min={0}
            />
            <label htmlFor="brand" className="sr-only"></label>
            <select
              id="brand"
              value={brandSelezionato}
              onChange={(e) => setBrandSelezionato(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#22881b] focus:border-[#22881b] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-[#22881b] dark:focus:border-[#22881b]"
            >
              <option value="">Nazione di provenienza</option>
              {nazioniUniche.map((nazione) => (
                <option key={nazione} value={nazione}>
                  {nazione}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="text-gray-200 !font-bold  !bg-[#22881b] shadow-sm shadow-[#22881b]"
            >
              Search
            </button>
          </form>
        </section>
        <div id="stats" class="bg-white py-10 dark:bg-gray-900 ">
          <h2 className="color-website mb-15 !text-[45px]">
            Alcune Statistiche
          </h2>
          <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-lg leading-7 text-gray-900 dark:text-gray-200">
                  Brand
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-transactions)] before:content-[counter(num)] text-gray-900 dark:text-gray-200 ">
                    {' '}
                    <span class="sr-only ">8</span>{' '}
                  </span>
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-lg leading-7 text-gray-900 dark:text-gray-200">
                  Modelli
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-assets)] before:content-[counter(num)] text-gray-900 dark:text-gray-200">
                    {' '}
                    <span class="sr-only ">7</span>
                  </span>
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-lg leading-7 text-gray-900 dark:text-gray-200">
                  Paesi
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-users)] before:content-[counter(num)] text-gray-900 dark:text-gray-200 before:left-[calc(0.4em * var(--n, 1))]">
                    <span class="sr-only">7</span>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <section className="flex flex-col items-center justify-center py-15 px-10 ">
          <h2 className="color-website mb-15 !text-[45px]">
            I brand più popolari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 ">
            <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10">
              <a href="#">
                <FerrariSvg width="full" height={300} />
              </a>
            </div>
            <div class="  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
              <a href="#">
                <img
                  src={Porsche}
                  alt="porsche logo"
                  className="mx-auto w-1/2 "
                />
              </a>
            </div>
            <div class="max-lg:h-90 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
              <a href="#">
                <img
                  src={Mercedes}
                  alt="mercedes logo"
                  className="w-1/2 mx-auto "
                />
              </a>
            </div>
            <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
              <a href="#">
                <img
                  src={Bugatti}
                  alt="bugatti logo"
                  className="w-5/6 mx-auto"
                />
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-5">
            <button
              type="button"
              class="focus:outline-none text-gray-200 !bg-[#22881b] !font-bold rounded-lg text-sm px-5 py-2.5 mt-7 !shadow-md"
            >
              Scopri tutti i marchi
            </button>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center py-15 px-10">
          <div>
            <h2 className="color-website !text-[45px] mb-5">
              Categorie principali
            </h2>
            <p className="text-lg text-gray-900 dark:text-gray-200">
              Selezioni curate per veri intenditori: ogni auto ha una storia,
              trova la tua tra le migliori categorie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mt-17">
            <div class="h-100 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5 flex flex-col items-center justify-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Supercar Recenti
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Le ultime novità dal mondo delle auto sportive.
                </p>
                <a href="#">
                  <svg
                    class="w-6 h-6 text-gray-900 dark:text-gray-200 hover:text-[#22881b]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div
                className="h-[65%] rounded-b-md"
                style={{
                  backgroundImage: `url(${McLaren})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
            <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5 flex flex-col items-center justify-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Icone del Passato
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Le leggende che hanno fatto la storia dell’automobilismo.
                </p>
                <a href="#">
                  <svg
                    class="w-6 h-6 text-gray-900 dark:text-gray-200 hover:text-[#22881b]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div
                className="h-[65%] rounded-b-md"
                style={{
                  backgroundImage: `url(${Jaguar})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
            <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5 flex flex-col items-center justify-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Limited Editions
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Modelli esclusivi e a tiratura limitata.
                </p>
                <a href="#" class>
                  <svg
                    class="w-6 h-6 text-gray-900 dark:text-gray-200 hover:text-[#22881b]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div
                className="h-[65%] rounded-b-md"
                style={{
                  backgroundImage: `url(${Ferrari})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
            <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5 flex flex-col items-center justify-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Auto Perfette per i Consumi
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Sportive che uniscono potenza ed efficienza.
                </p>
                <a href="#">
                  <svg
                    class="w-6 h-6 text-gray-900 dark:text-gray-200 hover:text-[#22881b]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div
                className="h-[65%] rounded-b-md"
                style={{
                  backgroundImage: `url(${McLarenArtura})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>

            <div class="h-100 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5 flex flex-col items-center justify-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Le Più Veloci
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Bolidi con prestazioni estreme e velocità da brivido.
                </p>
                <a href="#">
                  <svg
                    class="w-6 h-6 text-gray-900 dark:text-gray-200 hover:text-[#22881b]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div
                className="h-[65%] rounded-b-md"
                style={{
                  backgroundImage: `url(${Chiron})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
              <div class="p-5 flex flex-col items-center justify-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Auto Perfette per la Strada
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Sportive bilanciate tra comfort e prestazioni.
                </p>
                <a href="#">
                  <svg
                    class="w-6 h-6 text-gray-900 dark:text-gray-200 hover:text-[#22881b]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div
                className="h-[65%] rounded-b-md"
                style={{
                  backgroundImage: `url(${PorscheTurbo})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          </div>
        </section>
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
