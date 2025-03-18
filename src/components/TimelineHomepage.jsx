import { useState } from 'react'

const Timeline = () => {
  const [activeImage, setActiveImage] = useState(null)

  const timelineItems = [
    {
      id: 1,
      title: 'L’Idea che Cambia il Mondo',
      description:
        "Nicolas-Joseph Cugnot creò il primo veicolo a vapore nel 1769, aprendo la strada all'automobile moderna.",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/R%C3%A9tromobile_2011_-_Fardier_de_Cugnot_-_002.jpg/338px-R%C3%A9tromobile_2011_-_Fardier_de_Cugnot_-_002.jpg',
    },
    {
      id: 2,
      title: 'La Nascita dell’Automobile',
      description:
        'Karl Benz brevettò la prima vera automobile con motore a combustione interna nel 1886.',
      image: 'https://www.historyhit.com/app/uploads/2022/05/Carl_Benz.jpg',
    },
    {
      id: 3,
      title: 'L’Automobile per Tutti',
      description:
        'Henry Ford rivoluzionò il settore con la produzione di massa del Model T nel 1908.',
      image:
        'https://assets.editorial.aetnd.com/uploads/2010/04/ford-model-t-four-seat-tourer-motor-car-1916.jpg',
    },
  ]

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 mt-15 gap-55 pb-35">
      <div className="w-80 sm:w-95 h-100">
        <ul>
          {timelineItems.map((item) => (
            <li
              key={item.id}
              className={`relative cursor-pointer opacity-50 transition-opacity duration-300 flex flex-col items-start mb-15 ${
                activeImage === item.image ? 'opacity-100' : ''
              }`}
              onMouseEnter={() => setActiveImage(item.image)}
              onMouseLeave={() => setActiveImage(activeImage)}
            >
              <span className="hidden sm:flex justify-center items-center absolute w-[60px] h-[60px] -left-[117px] top-0 bg-black rounded-full text-[20px] text-white font-display">
                {item.id}
              </span>
              <h3 className="display-xs-medium md:display-s-medium font-display text-3xl text-start font-bold text-gray-900 dark:text-gray-200 my-4">
                {item.title}
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200 text-start">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Immagine Timeline */}
      <div className="flex items-center justify-center">
        <div className="relative w-120 h-60   ">
          {activeImage === null ? (
            <img
              src={timelineItems[0].image}
              alt="Immagine Timeline"
              className="w-full transition-transform duration-300 rounded-md shadow-2xl"
              style={{ transform: 'scale(1.05)' }}
            />
          ) : (
            <img
              src={activeImage}
              alt="Immagine Timeline"
              className="w-full transition-transform duration-300 rounded-md shadow-2xl"
              style={{ transform: 'scale(1.05)' }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Timeline
