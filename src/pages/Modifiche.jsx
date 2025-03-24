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

  if (loading) return <p>Caricamento...</p>
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
