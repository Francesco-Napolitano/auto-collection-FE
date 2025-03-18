import { Link } from 'react-router-dom'
import logoWeb from '../assets/logoauto.png'

const Footer = () => {
  return (
    <footer class="shadow-sm dark:bg-gray-900 overflow-hidden">
      <div class="max-w-screen-xl mx-auto md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img
                src={logoWeb}
                className="mt-1 h-10"
                alt="AutoIconiche logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                AutoIconiche
              </span>
            </a>
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a class="hover:underline me-4 md:me-6">
                <Link to="/common/about">About</Link>
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                <Link to="/common/about">Contact</Link>
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
            className="text-xs text-gray-500 sm:text-center dark:text-gray-400"
          >
            {' '}
            Wikipedia
          </a>
          ,
          <a
            href="https://motortrendtv.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 sm:text-center dark:text-gray-400"
          >
            {' '}
            MotorTrend
          </a>
          ,
          <a
            href="https://www.veloce.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 sm:text-center dark:text-gray-400"
          >
            {' '}
            veloce
          </a>
          ,
          <a
            href="https://autosprint.corrieredellosport.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 sm:text-center dark:text-gray-400"
          >
            {' '}
            Autosprint
          </a>
          ,
          <a
            href="https://autodesignmagazine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 sm:text-center dark:text-gray-400"
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
