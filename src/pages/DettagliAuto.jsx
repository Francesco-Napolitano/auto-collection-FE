import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DettagliAuto = () => {
  const { id } = useParams()
  const [auto, setAuto] = useState(null)
  const [img, setImg] = useState(null)
  useEffect(() => {
    const fetchDataAuto = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/auto/${id}`)
        console.log(res.data)
        setAuto(res.data)
      } catch (error) {
        console.log('Errore! ', error)
      }
    }
    fetchDataAuto()
    const fetchImg = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/immagini/auto/${id}`)
        setImg(res.data)
      } catch (error) {
        console.log('Errore! ', error)
      }
    }
    fetchImg()
  }, [id])

  if (!auto) return <p>Caricamento...</p>

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">{auto.modello}</h1>
      <p className="text-center text-gray-600">{auto.brand}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {img.map((image) => (
          <img
            key={image.id}
            src={image.immagineUrl}
            alt={auto.modello}
            className="w-full h-40 object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  )
}

export default DettagliAuto
