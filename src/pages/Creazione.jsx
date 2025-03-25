import React, { useState } from 'react'
import useFetch from '../hooks/useFetch' // ipotetico hook per POST

const Creazione = () => {
  const [formData, setFormData] = useState({
    nome: '',
    id: '',
    modello: '',
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
    immaginiIds: '',
  })

  const { sendRequest, loading, error } = useFetch('/auto', 'POST')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formattedData = {
      ...formData,
      anno: parseInt(formData.anno) || '',
      id: parseInt(formData.id) || '',
      potenza: parseInt(formData.potenza) || '',
      coppia: parseInt(formData.coppia) || '',
      velocitaMax: parseInt(formData.velocitaMax) || '',
      prezzo: parseFloat(formData.prezzo) || '',
      length: parseFloat(formData.length) || '',
      width: parseFloat(formData.width) || '',
      height: parseFloat(formData.height) || '',
      peso: parseFloat(formData.peso) || '',
      cilindrata: parseInt(formData.cilindrata) || '',
      unitaVendute: parseInt(formData.unitaVendute) || '',
      brand: {
        id: Number(formData.brandId),
        logoUrl: '', // Inserisci un valore vuoto o predefinito
        name: '',
      },
      nazione: {
        id: '',
        imageNation: '',
        name: '',
      },
      immagini: {
        id: '',
        immagineUrl: '',
      }, // Assicurati che sia un array
    }

    delete formattedData.brandId
    delete formattedData.nazioneId

    console.log('Dati inviati', JSON.stringify(formattedData, null, 2))

    const success = await sendRequest(formattedData)
    if (success) {
      alert('Auto aggiunta con successo!')
    } else {
      alert("Errore durante la creazione dell'auto")
    }
  }

  return (
    <div className="flex flex-col items-center py-25 bg-white dark:bg-gray-900">
      <h2 className="text-xl font-bold mb-4 color-website">Aggiungi Auto</h2>
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
              className="w-full p-2 border rounded mb-2"
            />
          </div>
        ))}

        <button
          type="submit"
          className="!bg-[#22881b] text-gray-200 !font-bold  p-2 rounded"
          disabled={loading}
        >
          {loading ? 'Caricamento...' : 'Aggiungi'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default Creazione
