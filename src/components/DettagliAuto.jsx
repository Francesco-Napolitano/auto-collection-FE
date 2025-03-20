import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

const DettagliAuto = () => {
  const { id } = useParams()

  // Fetch dei dettagli dell'auto
  const { data: auto, loading, error } = useFetch(`auto/${id}`, 'GET')

  useEffect(() => {
    console.log('Dati Auto Specifica:', auto)
  }, [auto])

  if (loading && error) return <p>Caricamento</p>
  if (!auto)
    return (
      <div class="flex h-100 justify-center rounded-3xl w-full dark:bg-gray-800 items-center mx-auto">
        <div className="bg-[#22881B] rounded-lg text-lg text-white animate-pulse font-semibold px-5 py-2">
          Caricamento...
        </div>
      </div>
    )

  return (
    <div className="w-full bg-white dark:bg-gray-900 pt-30 px-20">
      <div className="flex flex-col items-start  p-6 gap-10  mx-30 bg-white border-gray-200 dark:bg-gray-800 rounded-lg shadow-md dark:border-gray-700 duration-300 transition">
        <section>
          <h1 className="self-start color-website !text-[30px] pb-3">
            {auto.nome} {auto.modello}{' '}
          </h1>
          <p className=" text-sm text-gray-900 dark:text-gray-200 gap-3 flex">
            <span className="text-gray-900 dark:text-gray-200 flex items-center gap-1 ">
              <svg
                class="h-5 w-5 "
                viewBox="0 0 24 24"
                stroke-width="1.2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <path d="M12 3l5 5a7 7 0 1 1 -10 0l5 -5" />
              </svg>
              {auto.alimentazione}
            </span>
            <span className="text-gray-900 dark:text-gray-200 flex items-center gap-1">
              <svg
                class="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              {auto.motore}
            </span>
            <span className="text-gray-900 dark:text-gray-200 flex items-center gap-1">
              <svg
                class="h-5 text-gray-00 w-5 dark:text-gray-200 mr-1"
                viewBox="0 0 24 24"
                stroke-width="1.2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <circle cx="7" cy="17" r="2" /> <circle cx="17" cy="17" r="2" />{' '}
                <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
              </svg>{' '}
              {auto.carrozzeria}
            </span>
          </p>
        </section>

        <section>
          <div>
            <h2 className="!text-[22px] dark:text-gray-200 text-start mb-2">
              Dimensioni e Caratteristiche
            </h2>
          </div>
        </section>

        <section className="flex flex-col md:flex-row md:justify-between gap-3">
          <div>
            <h2 className="!text-[22px] dark:text-gray-200 text-start mb-2">
              Fotogallery: {auto.nome} {auto.modello}
            </h2>
            <div className="grid grid-cols-1 gap-0.5 ">
              <div className="w-5/6 ">
                <img
                  src={auto.immagini[0].immagineUrl}
                  alt={auto.modello}
                  className="rounded-t-md"
                />
              </div>
              <div className="grid grid-cols-3 w-5/6 gap-0.5 ">
                <img
                  className="w-full rounded-bl-md"
                  src={auto.immagini[1].immagineUrl}
                  alt={auto.modello}
                />
                <img
                  className="w-full"
                  src="https://placecats.com/300/200"
                  alt={auto.modello}
                />
                <img
                  className="w-full rounded-br-md"
                  src="https://placecats.com/300/200"
                  alt={auto.modello}
                />
              </div>
            </div>
          </div>
          <aside className="flex flex-col basis-[70%] ">
            <form class="max-w-sm flex flex-col items-center">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Paragona con...
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Scegli una marca</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </aside>
        </section>
      </div>
    </div>
  )
}

export default DettagliAuto
