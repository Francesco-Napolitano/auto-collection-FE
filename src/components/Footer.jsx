import { Link } from 'react-router-dom'
import logoWeb from '../assets/logoauto.png'

const Footer = () => {
  return (
    <footer class="shadow-sm dark:bg-gray-900 overflow-hidden pt-10 px-5">
      <div class="max-w-screen-xl md:py-8 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <a class="flex items-center mb-4 rtl:space-x-reverse sm:mb-0 space-x-3">
              <img
                src={logoWeb}
                className="h-10 mt-1"
                alt="AutoIconiche logo"
              />
              <span class="text-2xl dark:text-white font-semibold self-center whitespace-nowrap">
                AutoIconiche
              </span>
            </a>
          </Link>
          <ul class="flex flex-wrap text-gray-500 text-sm dark:text-gray-400 font-medium items-center mb-6 sm:mb-0">
            <li>
              <a class="hover:underline md:me-6 me-4">
                <Link to="/common/about">About</Link>
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline md:me-6 me-4">
                Torna su
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                <Link to="/common/about">Contact</Link>
              </a>
            </li>
          </ul>
        </div>
        <hr class="border-gray-200 dark:border-gray-700 lg:my-8 my-6 sm:mx-auto" />
        <span class="text-gray-500 text-sm block dark:text-gray-400 sm:text-center">
          © 2025{' '}
          <a href="#" class="hover:underline">
            AutoIconiche™
          </a>
          . Tutti i diritti riservati.
        </span>
        <p className="text-xs">
          Immagini fornite da
          <a
            href="https://it.wikipedia.org/wiki/Pagina_principale"
            className="text-gray-500 text-xs dark:text-gray-400 sm:text-center"
          >
            {' '}
            Wikipedia
          </a>
          ,
          <a
            href="https://motortrendtv.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs dark:text-gray-400 sm:text-center"
          >
            {' '}
            MotorTrend
          </a>
          ,
          <a
            href="https://www.veloce.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs dark:text-gray-400 sm:text-center"
          >
            {' '}
            veloce
          </a>
          ,
          <a
            href="https://autosprint.corrieredellosport.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs dark:text-gray-400 sm:text-center"
          >
            {' '}
            Autosprint
          </a>
          ,
          <a
            href="https://it.motor1.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs dark:text-gray-400 sm:text-center"
          >
            {' '}
            Motor1
          </a>
          ,
          <a
            href="https://autodesignmagazine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs dark:text-gray-400 sm:text-center"
          >
            {' '}
            Auto&Design
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
