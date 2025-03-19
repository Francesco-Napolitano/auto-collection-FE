import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import videoSrc from '../assets/cars-women.mp4'
import FerrariSvg from '../utils/FerrariSvg'
import McLarenSvg from '../utils/McLarenSvg'
import Porsche from '../assets/Logo_della_Porsche.svg.png'
import '../styles/homepage.css'
import TimelineHomepage from '../components/TimelineHomepage'
import CategoriePrincipaliHomepage from '../components/CategoriePrincipaliHomepage'
import BrandPopolariHomepage from '../components/BrandPopolariHomepage'

const Home = () => {
  const { data: auto, loading, error } = useFetch('/auto', 'GET')

  const [brandSelezionato, setBrandSelezionato] = useState(null)
  const [nazioneSelezionata, setNazioneSelezionata] = useState(null)
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
    <div className="pt-35 md:pt-25 bg-white border-gray-200 dark:bg-gray-900 ">
      <section className="flex flex-col items-center gap-5">
        <h1 className="color-website max-[466px]:pt-20 px-3">
          Scopri le Auto più Iconiche di Sempre
        </h1>
        <p className="text-lg text-gray-900 rounded-sm px-4 dark:text-gray-200 ">
          Un viaggio nel tempo tra le auto sportive che hanno segnato epoche e
          scritto <br />
          la storia dell’automobilismo!
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex items-center">
            <div className="border border-black ">
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
      <video className="hidden md:block w-full h-140 my-13" loop autoPlay muted>
        <source className="rounded" src={videoSrc} />
      </video>
      <section className="bg-white border border-gray-200 rounded-lg shadow-xs transition duration-300 dark:bg-gray-800 dark:border-gray-700 w-4/5 mx-auto py-10 md:p-10 flex justify-around">
        <form className="grid grid-cols-2 lg:grid-cols-3 w-4/5 gap-3 ">
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
            value={nazioneSelezionata}
            onChange={(e) => setNazioneSelezionata(e.target.value)}
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
        <h2 className="color-website mb-15 !text-[45px]">Alcune Statistiche</h2>
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
                  <span class="sr-only ">8</span>
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
      <BrandPopolariHomepage />
      <CategoriePrincipaliHomepage />
      <TimelineHomepage />
    </div>
  )
}

export default Home
