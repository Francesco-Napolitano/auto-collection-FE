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
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-15">
      <div className="col-span-12 lg:col-span-5">
        <ul>
          {timelineItems.map((item) => (
            <li
              key={item.id}
              className={`relative cursor-pointer opacity-50 transition-opacity duration-300 flex flex-col items-start w-170 ${
                activeImage === item.image ? 'opacity-100' : ''
              }`}
              onMouseEnter={() => setActiveImage(item.image)}
              onMouseLeave={() => setActiveImage(activeImage)}
            >
              <span className="hidden sm:flex justify-center items-center absolute w-[60px] h-[60px] -left-[117px] top-0 bg-black rounded-full text-[20px] text-white font-display">
                {item.id}
              </span>
              <h3 className="display-xs-medium md:display-s-medium font-display text-gray-500 dark:text-gray-80 mt-4">
                {item.title}
              </h3>
              <p className="text-sm-regular text-gray-300 dark:text-gray-100  pr-10 text-start">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Immagine Timeline */}
      <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-center relative mt-8 lg:mt-0">
        <div className="relative w-80 overflow-hidden rounded-lg shadow-3xl">
          {activeImage ? (
            <img
              src={activeImage}
              alt="Immagine Timeline"
              className="w-full transition-transform duration-300"
              style={{ transform: 'scale(1.05)' }}
            />
          ) : (
            <p className="text-center text-gray-400">
              Passa il mouse su un evento
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Timeline
