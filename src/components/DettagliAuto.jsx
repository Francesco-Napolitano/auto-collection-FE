import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const DettagliAuto = () => {
  const { id } = useParams()

  // Fetch dei dettagli dell'auto
  const { data: auto, loading, error } = useFetch(`auto/${id}`, 'GET')

  if (loading)
    return (
      <div
        role="status"
        className="h-screen flex items-center gap-2 justify-center bg-white dark:bg-gray-900"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#22881B]"
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
        <span className="sr-only">Loading...</span>
        <span className="text-gray-900 dark:text-gray-200">Caricamento</span>
      </div>
    )

  if (error) return <p>Errore</p>
  if (!auto) return <div>Caricamento...</div>

  return (
    <div className="w-full bg-white dark:bg-gray-900 pt-50 sm:pt-30 xl:px-20 px-2">
      <div className="flex flex-col items-start  p-6 gap-10  md:mx-30 bg-white border-gray-200 dark:bg-gray-800 rounded-lg shadow-xl dark:border-gray-700 duration-300 transition">
        <section>
          <h1 className="text-start !text-[35px] pb-3 text-gray-900 dark:text-gray-200">
            {auto.nome} {auto.modello}{' '}
          </h1>
          <p className=" text-sm text-gray-900 dark:text-gray-200 gap-3 flex">
            <span className="text-gray-900 dark:text-gray-200 flex items-center gap-1 ">
              <svg
                className="h-5 w-5 "
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <path d="M12 3l5 5a7 7 0 1 1 -10 0l5 -5" />
              </svg>
              {auto.alimentazione}
            </span>
            <span className="text-gray-900 dark:text-gray-200 flex items-center gap-1">
              <svg
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              {auto.motore}
            </span>
            <span className="text-gray-900 dark:text-gray-200 flex items-center gap-1">
              <svg
                className="h-5 text-gray-00 w-5 dark:text-gray-200 mr-1"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
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
        <section className="flex flex-col md:flex-row md:justify-between gap-3 w-full">
          <div className="w-full ">
            <h2 className="!text-[22px] dark:text-gray-200 text-start mb-2 color-website">
              Fotogallery :
            </h2>
            {auto.immagini ? (
              <div className="grid grid-cols-1 gap-0.5 ">
                <div>
                  <img
                    src={auto.immagini[1].immagineUrl}
                    alt={auto.modello}
                    className="rounded-t-md w-full hover:scale-102 duration-300 transition object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 ">
                  <div>
                    <img
                      className=" rounded-bl-md w-full h-full hover:scale-120 duration-200 transition object-cover"
                      src={auto.immagini[2].immagineUrl}
                      alt={auto.modello}
                    />
                  </div>
                  <div>
                    <img
                      className="rounded-bl-md w-full h-full hover:scale-120 duration-200 transition object-cover"
                      src={auto.immagini[0].immagineUrl}
                      alt={auto.modello}
                    />
                  </div>
                  <div>
                    <img
                      className=" rounded-br-md w-full h-full hover:scale-120 duration-200 transition object-cover"
                      src={auto.immagini[3].immagineUrl}
                      alt={auto.modello}
                    />
                  </div>
                </div>
                <p className="flex text-xs text-gray-500 font-light gap-0.5 flex-wrap">
                  Le immagini provengono da fonti gratuite:
                  <div>
                    <a
                      href="https://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                    >
                      Wikipedia,
                    </a>
                    <a href="https://pixabay.com/" target="_blank">
                      Pixabay
                    </a>
                    ,
                    <a href="https://www.pexels.com/" target="_blank">
                      Pexels
                    </a>
                    ,
                    <a href="https://unsplash.com/" target="_blank">
                      Unsplash
                    </a>
                    .
                  </div>
                  {auto.id === 3 ? (
                    <div className="flex flex-wrap text-xs">
                      No changes were made:{' '}
                      <a href="https://commons.wikimedia.org/wiki/File:Carrera_GT_at_Rector.jpg">
                        Sam Pullara from San Francisco, CA, USA ,{' '}
                      </a>
                      <a href="https://creativecommons.org/licenses/by/2.0">
                        CC BY 2.0 , via Wikimedia Commons.{' '}
                      </a>
                      <a href="https://commons.wikimedia.org/wiki/File:Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_(July_2008).jpg">
                        {' '}
                        Brian Snelson from Hockley, Essex, England
                      </a>
                      ,{' '}
                      <a href="https://creativecommons.org/licenses/by/2.0">
                        CC BY 2.0 , via Wikimedia Commons
                      </a>
                    </div>
                  ) : null}
                  {auto.id === 12 ? (
                    <div className="flex flex-wrap text-xs">
                      No changes were made:{' '}
                      <a
                        href="https://commons.wikimedia.org/wiki/File:Zenvo_TS1_cropped.jpg"
                        target="_blank"
                      >
                        Karsakov
                      </a>
                      ,{' '}
                      <a
                        href="https://creativecommons.org/licenses/by-sa/4.0"
                        target="_blank"
                      >
                        CC BY-SA 4.0 , via Wikimedia Commons -
                      </a>
                      <a
                        href="https://commons.wikimedia.org/wiki/File:Zenvo_TS1_front_wing.jpg"
                        target="_blank"
                      >
                        Bulletfoss
                      </a>
                      ,{' '}
                      <a
                        href="https://creativecommons.org/licenses/by-sa/4.0"
                        target="_blank"
                      >
                        CC BY-SA 4.0 , via Wikimedia Commons
                      </a>
                      <a
                        href="https://commons.wikimedia.org/wiki/File:2009_Zenvo_ST1.jpg"
                        target="_blank"
                      >
                        G patkar at English Wikipedia
                      </a>
                      ,{' '}
                      <a
                        href="https://creativecommons.org/licenses/by-sa/3.0"
                        target="_blank"
                      >
                        CC BY-SA 3.0 , via Wikimedia Commons
                      </a>
                      <a
                        href="https://commons.wikimedia.org/wiki/File:Lime_Green_Zenvo_ST1_at_GIMS_2015_(Ank_Kumar)_06.jpg"
                        target="_blank"
                      >
                        Ank Kumar
                      </a>
                      ,{' '}
                      <a
                        href="https://creativecommons.org/licenses/by-sa/4.0"
                        target="_blank"
                      >
                        CC BY-SA 4.0 , via Wikimedia Commons
                      </a>
                    </div>
                  ) : null}
                  {auto.id === 18 ? (
                    <div className="flex flex-wrap text-xs">
                      No changes were made:{' '}
                      <a href="https://commons.wikimedia.org/wiki/File:2013_IAA_DSC01994_DxO_(9879239544)_(2).jpg">
                        youkeys
                      </a>
                      ,{' '}
                      <a href="https://creativecommons.org/licenses/by/2.0">
                        CC BY 2.0 , via Wikimedia Commons
                      </a>
                    </div>
                  ) : null}
                </p>
              </div>
            ) : (
              <div
                role="status"
                className="h-screen flex items-center gap-2 justify-center bg-white dark:bg-gray-900"
              >
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#22881B]"
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
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
          <aside className="flex flex-col basis-[46%] items-center">
            <form className="w-1/2 flex flex-col items-center">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                Paragona con...
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultValue="">Scegli una marca</option>
                <option value="CA">Ferrari</option>
                <option value="FR">Porsche</option>
                <option value="DE">Aston Martin</option>
              </select>
            </form>
          </aside>
        </section>
        <section>
          <div className="flex flex-col ">
            <h2 className="!text-[26px] color-website dark:text-gray-200 text-start mb-2">
              Principali Caratteristiche
            </h2>
            <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-2" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 py-5 text-gray-900 dark:text-gray-200 ">
              <div className="flex gap-1 items-baseline md:justify-center">
                <p className="text-lg">Potenza:</p>
                <p className="font-bold">
                  {' '}
                  {auto.potenza} CV (
                  {Math.round(auto.potenza * 0.735 * 100) / 100} kW)
                </p>
              </div>
              <div className="flex gap-1 items-baseline md:justify-center">
                <p className="text-lg">Coppia:</p>
                <p className="font-semibold"> {auto.coppia} Nm </p>
              </div>
              <div className="flex gap-1 items-baseline md:justify-center">
                <p className="text-lg">Velocità Massima:</p>
                <p className="font-semibold"> {auto.velocitaMax} km/h </p>
              </div>
              <div className="flex gap-1 items-baseline md:justify-center">
                <p className="text-lg">Motore:</p>
                <p className="font-semibold">
                  {' '}
                  {auto.strutturaMotore} {auto.motore.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col ">
            <h2 className="!text-[26px] color-website dark:text-gray-200 text-start mb-2">
              Descrizione
            </h2>
            <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
            <p className="text-gray-900 dark:text-gray-200 text-start">
              <span className="font-bold">
                {auto.descrizione.split('.').slice(0, 2).join('.')}.
              </span>
              <br />
              <br />
              {auto.descrizione
                .split('.')
                .slice(2)
                .filter((sentence) => sentence.trim() !== '')
                .map((sentence, index) => (
                  <span key={index}>
                    {sentence}.
                    {index % 2 === 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
            </p>
          </div>
        </section>
        <section className="w-full text-start">
          <div className="flex flex-col">
            <h2 className="!text-[26px] color-website dark:text-gray-200 text-start mb-2">
              Specifiche dell'auto
            </h2>
            <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
            <div>
              <h3 className="font-extrabold dark:text-gray-200 text-lg mt-5">
                Motore:{' '}
                <span className="color-website font-normal">
                  {(auto.cilindrata / 1000).toFixed(1)}L {auto.strutturaMotore}{' '}
                  ({auto.potenza} CV)
                </span>
              </h3>
              <hr className="border-t-3 border-black  my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Struttura:</p>
                <p>
                  {auto.strutturaMotore} {auto.motore.toLowerCase()}
                </p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Cilindrata:</p>
                <p>{auto.cilindrata} cm3</p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Potenza:</p>
                <p>{auto.potenza} CV</p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />

              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Coppia:</p>
                <p>{auto.coppia} Nm</p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />

              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">
                  Alimentazione:
                </p>
                <p>{auto.alimentazione} </p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Trazione:</p>
                <p>{auto.trazione} </p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">
                  Posizionamento motore:
                </p>
                <p>{auto.posizioneMotore} </p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
            </div>
            <div>
              <h3 className="font-extrabold dark:text-gray-200 text-lg mt-5">
                Performance:
              </h3>
              <hr className="border-t-3 border-black  my-3" />

              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">
                  Velocità massima:
                </p>
                <p>{auto.velocitaMax} km/h</p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
            </div>

            <div>
              <h3 className="font-extrabold dark:text-gray-200 text-lg mt-5">
                Dimensioni:
              </h3>
              <hr className="border-t-3 border-black  my-3" />

              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Lunghezza:</p>
                <p>{auto.length} mm </p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Larghezza:</p>
                <p>{auto.width} mm</p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Altezza:</p>
                <p>{auto.height} mm</p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Peso:</p>
                <p>{auto.peso} kg</p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />

              <div>
                <h3 className="font-extrabold dark:text-gray-200 text-lg mt-5">
                  Altre informazioni:
                </h3>
                <hr className="border-t-3 border-black  my-3" />
              </div>
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Tipo:</p>
                <p>{auto.carrozzeria} </p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">
                  Unità Vendute:
                </p>
                <p>{auto.unitaVendute} </p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">Anno:</p>
                <p>{auto.anno} </p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
              <div className="flex justify-start text-gray-900 dark:text-gray-200">
                <p className="w-1/2 pr-1 lg:w-1/3 font-semibold">
                  Prezzo all'uscita:
                </p>
                <p>
                  {' '}
                  {new Intl.NumberFormat('it-IT', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(auto.prezzo)}{' '}
                  €
                </p>
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-700 my-3" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DettagliAuto
