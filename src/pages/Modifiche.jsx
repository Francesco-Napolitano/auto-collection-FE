import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch' // ipotetico hook per POST
import { useParams } from 'react-router-dom'

const Modifiche = () => {
  const { id } = useParams()
  const {
    data: autoDaModificare,
    loading,
    error,
  } = useFetch(`/auto/${id}`, 'GET')

  const { sendRequest: updateRequest, loading: updateLoading } = useFetch(
    `/auto/${id}`,
    'PUT'
  ) // endpoint e metodo
  const [formData, setFormData] = useState({
    nome: '',
    modello: '',
    id: '',
    anno: '',
    motore: '',
    potenza: '',
    coppia: '',
    velocitaMax: '',
    prezzo: '',
    descrizione: '',
    alimentazione: '',
    length: '',
    width: '',
    height: '',
    peso: '',
    cilindrata: '',
    strutturaMotore: '',
    trazione: '',
    posizioneMotore: '',
    carrozzeria: '',
    unitaVendute: '',
    brandId: '',
    nazioneId: '',
    immagini: '',
  })

  useEffect(() => {
    if (autoDaModificare) {
      setFormData({
        nome: autoDaModificare.nome || '',
        modello: autoDaModificare.modello || '',
        id: autoDaModificare.id || '',
        anno: autoDaModificare.anno || '',
        prezzo: autoDaModificare.prezzo || '',
        motore: autoDaModificare.motore || '',
        potenza: autoDaModificare.potenza || '',
        coppia: autoDaModificare.coppia || '',
        velocitaMax: autoDaModificare.velocitaMax || '',
        descrizione: autoDaModificare.descrizione || '',
        alimentazione: autoDaModificare.alimentazione || '',
        length: autoDaModificare.length || '',
        width: autoDaModificare.width || '',
        height: autoDaModificare.height || '',
        peso: autoDaModificare.peso || '',
        cilindrata: autoDaModificare.cilindrata || '',
        strutturaMotore: autoDaModificare.strutturaMotore || '',
        trazione: autoDaModificare.trazione || '',
        posizioneMotore: autoDaModificare.posizioneMotore || '',
        carrozzeria: autoDaModificare.carrozzeria || '',
        unitaVendute: autoDaModificare.unitaVendute || '',
        brandId: autoDaModificare.brand?.id || '',
        nazioneId: autoDaModificare.nazione?.id || '',
        immagini: autoDaModificare.immagini?.map((img) => img.id) || [],
      })
    }
  }, [autoDaModificare])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formattedData = {
      ...formData,
      brand: {
        id: Number(formData.brandId),
        logoUrl: autoDaModificare?.brand.logoUrl || '',
        name: autoDaModificare?.brand.name || '',
      }, // Serve a inviare i dati di brand dentro la fetch di automobili e permettere così la modifica dell'auto
      nazione: {
        id: Number(formData.nazioneId),
        imageNation: autoDaModificare?.nazione.imageNation || '',
        name: autoDaModificare?.nazione.name || '',
      }, // Serve a inviare i dati di nazione dentro la fetch di automobili e permettere così la modifica dell'auto
      immagini: autoDaModificare?.immagini || [],
    }

    delete formattedData.brandId
    delete formattedData.nazioneId

    console.log('Dati inviati', JSON.stringify(formattedData, null, 2))

    const success = await updateRequest(formattedData)

    if (success) {
      alert('Auto aggiornata con successo!')
      window.location.href = `/auto/${id}`
    } else {
      alert("Errore durante l'aggiornamento dell'auto")
    }
  }

  if (loading)
    return (
      <div
        role="status"
        className="h-screen flex items-center gap-2 justify-center bg-white dark:bg-gray-900"
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
        <span className="text-gray-900 dark:text-gray-200">Caricamento</span>
      </div>
    )

  if (error) return <p>Errore nel caricamento.</p>

  return (
    <div className="flex flex-col items-center py-25 bg-white dark:bg-gray-900">
      <h2 className="text-xl font-bold mb-4 color-website">
        Modifica l'automobile
      </h2>
      <form onSubmit={handleSubmit} className="text-start text-lg py-5 ">
        {Object.keys(formData).map((key) => (
          <div key={key} className="py-2 text-gray-900 dark:text-gray-200">
            <label htmlFor={key}>{key}:</label>
            <input
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={formData[key]}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2 text-gray-900"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="!bg-[#22881b] text-gray-200 !font-bold  p-2 rounded"
          disabled={loading}
        >
          {updateLoading ? 'Caricamento...' : 'Salva Modifiche'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default Modifiche
