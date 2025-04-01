import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Brand = () => {
  const { data: brand, loading, error } = useFetch('/brand', 'GET')

  const [loadedImages, setLoadedImages] = useState({})

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }))
  }

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

  if (error) return <p>Errore nel caricamento.</p>
  if (!brand)
    return (
      <div className="flex h-100 justify-center rounded-3xl w-full dark:bg-gray-800 items-center mx-auto">
        <div className="bg-[#22881B] rounded-lg text-lg text-white animate-pulse font-semibold px-5 py-2">
          Caricamento...
        </div>
      </div>
    )

  return (
    <section className=" max-sm:mt-17 pb-10 bg-white border-gray-200 dark:bg-gray-900 mx-auto pt-30">
      <div className="container flex flex-col justify-center gap-10 items-center mx-auto px-6 py-8">
        <h1 className="color-website">Brand</h1>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {brand.length > 0 ? (
            brand
              .sort((a, b) => a.name.localeCompare(b.name)) // Ordina alfabeticamente
              .map((brand) => (
                <Link to={`/brand/${brand.id}`}>
                  <div
                    key={brand.id}
                    className="flex flex-col h-40 bg-white border border-gray-200 justify-center p-5 rounded-lg shadow-sm cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:from-gray-700 duration-300 gap-3 hover:bg-gradient-to-tl hover:from-gray-200 items-center transition"
                  >
                    <img
                      src={brand.logoUrl}
                      alt={brand.name}
                      className={`h-20 md:h-20 w-35 object-contain ${
                        loadedImages[brand.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(brand.id)}
                    />
                    <p className="text-gray-900 text-lg dark:text-gray-200 font-medium">
                      {brand.name}
                    </p>
                  </div>
                </Link>
              ))
          ) : (
            <p className="text-gray-500">Nessun brand disponibile</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Brand
