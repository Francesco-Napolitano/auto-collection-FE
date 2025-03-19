import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const Automobili = () => {
  const { data: auto, loading, error } = useFetch('/auto', 'GET')
  //richiama tutte le automobili del database
  useEffect(() => {
    auto ? console.log('Automobili sezione:', auto) : 'Nessun auto'
  })

  if (loading) return <p>Caricamento...</p>
  if (error) return <p>Errore nel caricamento.</p>
  if (!auto) return <p>Nessun dato trovato per questa auto.</p>

  return (
    <section className="pt-30 mx-auto bg-white border-gray-200 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-center gap-10 px-6 py-8 mx-auto">
        <h1 className="color-website self-start">
          Esplora le Auto più Iconiche di Sempre
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-15">
          {auto.length > 0 ? (
            auto.map((automobile) => (
              <div
                className="cursor-pointer flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 justify-center transition duration-300 hover:bg-gradient-to-tl hover:from-gray-200 dark:hover:from-gray-700"
                key={automobile.id}
              >
                <img
                  className="w-80 h-50 rounded-t-lg mb-2"
                  src={automobile.immagini[0].immagineUrl}
                  alt={automobile.modello}
                />
                <div className="flex flex-col pb-5 w-full text-start">
                  <p className="text-start text-sm uppercase font-mono text-gray-800 dark:text-gray-400 font-stretch-150%">
                    {automobile.nome}
                  </p>
                  <p className="font-bold mb-3 text-gray-900 dark:text-gray-200">
                    {automobile.modello}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                        />
                      </svg>
                    </span>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      <svg
                        class="h-6 w-6 text-gray-800 dark:text-white"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {' '}
                        <path stroke="none" d="M0 0h24v24H0z" />{' '}
                        <circle cx="7" cy="17" r="2" />{' '}
                        <circle cx="17" cy="17" r="2" />{' '}
                        <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                      </svg>{' '}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p> Nessun auto disponibile </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Automobili
