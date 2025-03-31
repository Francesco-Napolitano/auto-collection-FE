import React, { useContext, useEffect, useState } from 'react'
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
import AuthContext from '../context/AuthContext'

const Home = () => {
  const { data: auto, loading, error } = useFetch('/auto', 'GET')
  const { login } = useContext(AuthContext)

  const [brandSelezionato, setBrandSelezionato] = useState('')
  const [modelli, setModelli] = useState('')
  const [modelloSelezionato, setModelloSelezionato] = useState('')
  const [prezzoMin, setPrezzoMin] = useState('')
  const [prezzoMax, setPrezzoMax] = useState('')
  const [annoMin, setAnnoMin] = useState('')
  const [nazioneSelezionata, setNazioneSelezionata] = useState('')

  // funzione che trasforma i nomi dei  brand in numero da passare come id
  const brandMap = {}
  if (auto) {
    auto.forEach((auto) => {
      brandMap[auto.nome] = auto.brand.id
    })
  }

  // funzione che trasforma i nomi delle nazioni in numero da passare come id
  const nazioneMap = {}
  if (auto) {
    auto.forEach((auto) => {
      nazioneMap[auto.nazione.name] = auto.nazione.id
    })
  }

  const brandUnici = [...new Set(auto?.map((auto) => auto.nome))]
  const nazioniUniche = [...new Set(auto?.map((auto) => auto.nazione.name))]
  // Funzione per creare l'URL con i parametri validi
  const buildQueryParams = () => {
    const params = new URLSearchParams()

    if (modelloSelezionato) params.append('modello', modelloSelezionato)
    if (prezzoMin) params.append('prezzoMin', Number(prezzoMin))
    if (prezzoMax) params.append('prezzoMax', Number(prezzoMax))
    if (annoMin) params.append('annoMin', Number(annoMin))
    if (brandSelezionato) params.append('brandID', brandMap[brandSelezionato])
    if (nazioneSelezionata)
      params.append('nazioneId', nazioneMap[nazioneSelezionata])

    return params.toString() // Restituisce la query string
  }

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

  useEffect(() => {
    // Controlla se c'è un token nell'URL
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')

    if (token) {
      login(token)
      // Rimuovi il parametro token dall'URL
      window.history.replaceState({}, document.title, '/')
    }
  }, [login])

  if (loading)
    return (
      <div
        role="status"
        className="h-screen flex items-center gap-2 justify-center"
      >
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#22881B]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
        <span className="">Caricamento</span>
      </div>
    )

  if (error) return <p>Errore nel caricamento.</p>
  if (!auto) return <div>Caricamento...</div>

  return (
    <div className="pt-35 md:pt-25 bg-white border-gray-200 dark:bg-gray-900 ">
      <section className="flex flex-col items-center gap-5 ">
        <h1 className="color-website max-[466px]:pt-20 px-3">
          Scopri le Auto più Iconiche di Sempre
        </h1>
        <p className="text-lg text-gray-900 rounded-sm px-4 dark:text-gray-200 ">
          Un viaggio nel tempo tra le auto sportive che hanno segnato epoche e
          scritto <br />
          la storia dell’automobilismo!
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-10 pb-10">
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
      <div className="  ">
        <video
          className="hidden md:block w-full h-140 my-13 "
          loop
          autoPlay
          muted
        >
          <source className="rounded" src={videoSrc} />
        </video>
        <section className="bg-white border border-gray-200 rounded-lg shadow-xs transition duration-300 dark:bg-gray-800 dark:border-gray-700 w-4/5 mx-auto py-10 md:p-10 flex justify-around">
          <form className="grid grid-cols-2 lg:grid-cols-3 w-4/5 gap-3 justify-center items-center">
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
              onChange={(e) => setModelloSelezionato(e.target.value)}
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
              value={prezzoMin}
              onChange={(e) => setPrezzoMin(e.target.value)}
            />
            <label for="number-input" class="sr-only">
              Select a number:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#22881b] focus:border-[#22881b] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-[#22881b] dark:focus:border-[#22881b]"
              placeholder="Fino a (€)"
              min={0}
              value={prezzoMax}
              onChange={(e) => setPrezzoMax(e.target.value)}
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
              min={1886}
              value={annoMin}
              onChange={(e) => setAnnoMin(e.target.value)}
            />
            <label htmlFor="nazione" className="sr-only"></label>
            <select
              id="nazione"
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
            <div className="hidden lg:block"></div>
            <Link to={`/ricerca?${buildQueryParams()}`}>
              <button
                type="submit"
                className="text-gray-200 w-full !font-bold !bg-[#22881b] p-1  shadow-sm shadow-[#22881b] "
              >
                Cerca
              </button>
            </Link>
          </form>
        </section>
      </div>

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
                  <span class="sr-only ">12</span>{' '}
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
