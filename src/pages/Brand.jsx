import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Brand = () => {
  const { data: brand, loading, error } = useFetch('/brand', 'GET')

  const [loadedImages, setLoadedImages] = useState({})

  useEffect(() => {
    if (brand) console.log('Tutte le Auto:', brand)
  }, [brand])

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }))
  }

  if (loading) return <p>Caricamento</p>
  if (error) return <p>Errore nel caricamento.</p>
  if (!brand)
    return (
      <div class="flex h-100 justify-center rounded-3xl w-full dark:bg-gray-800 items-center mx-auto">
        <div className="bg-[#22881B] rounded-lg text-lg text-white animate-pulse font-semibold px-5 py-2">
          Caricamento...
        </div>
      </div>
    )

  return (
    <section className="h-screen max-sm:mt-17 max-lg:mb-80 bg-white border-gray-200 dark:bg-gray-900 mx-auto pt-30">
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
                      className={`h-20 w-35 object-contain ${
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
