import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const Brand = () => {
  const { data: brand, loading, error } = useFetch('/brand', 'GET')

  useEffect(() => {
    if (brand) console.log('Tutte le Auto:', brand)
  }, [brand])

  if (loading) return <p>Caricamento...</p>
  if (error) return <p>Errore nel caricamento.</p>
  if (!brand) return <p>Nessun dato trovato per questa brand.</p>

  return (
    <section className="pt-30 mx-auto bg-white border-gray-200 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-center gap-10 px-6 py-8 mx-auto">
        <h1 className="color-website ">Brand</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {brand.length > 0 ? (
            brand
              .sort((a, b) => a.name.localeCompare(b.name)) // Ordina alfabeticamente
              .map((brand) => (
                <div
                  key={brand.id}
                  className="cursor-pointer flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 justify-center transition duration-300 hover:bg-gradient-to-tl hover:from-gray-200 dark:hover:from-gray-700"
                >
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="w-35 h-20 object-contain"
                  />
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                    {brand.name}
                  </p>
                </div>
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
