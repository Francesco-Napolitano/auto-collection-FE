import Ferrari from '../assets/Ferrari-250-GTO-at-Goodwood-3.webp'
import Jaguar from '../assets/jaguar-xj220-1-1360x765.webp'
import McLaren from '../assets/McLaren-P1_autosprint.ch_.jpg'
import McLarenArtura from '../assets/2025_mclaren_artura_coupe_base_fq_oem_1_1600.avif'
import Chiron from '../assets/2016030101_Bugatti_Chiron.jpg'
import PorscheTurbo from '../assets/s20-1418-fine-jpg.webp'
import '../styles/homepage.css'

const CategoriePrincipaliHomepage = () => {
  return (
    <section className="flex flex-col items-center justify-center py-15 px-10 gap-5 ">
      <div>
        <h2 className="color-website !text-[45px] mb-5">
          Categorie principali
        </h2>
        <p className="text-lg text-gray-900 dark:text-gray-200">
          Selezioni curate per veri intenditori: ogni auto ha una storia, trova
          la tua tra le migliori categorie.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:grid-cols-3 mt-17">
        <div class="h-100 bg-white transition duration-300 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="p-5 flex flex-col items-center justify-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                Supercar Recenti
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
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
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div class=" h-100 bg-white transition duration-300 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="p-5 flex flex-col items-center justify-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                Icone del Passato
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
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
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div class=" h-100 bg-white transition duration-300 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="p-5 flex flex-col items-center justify-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                Limited Editions
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
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
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div class=" h-100 bg-white transition duration-300 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="p-5 flex flex-col items-center justify-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                Auto Perfette per i Consumi
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
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
            className="h-[65%] rounded-b-md "
            style={{
              backgroundImage: `url(${McLarenArtura})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div class="h-100 bg-white transition duration-300 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 max-[423px]:mt-8">
          <div class="p-5 flex flex-col items-center justify-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                Le Più Veloci
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
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
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div class="h-100 bg-white transition duration-300 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
          <div class="p-5 flex flex-col items-center justify-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                Auto Perfette per la Strada
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
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
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
      <div className="mt-10 lg:mt-5 mb-20">
        <button
          type="button"
          class="focus:outline-none text-gray-200 !bg-[#22881b] !font-bold rounded-lg text-sm px-5 py-2.5 !shadow-md"
        >
          Scopri tutte le categorie
        </button>
      </div>
    </section>
  )
}

export default CategoriePrincipaliHomepage
