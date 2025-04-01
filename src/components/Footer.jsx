import { Link } from 'react-router-dom'
import logoWeb from '../assets/logoauto.png'

const Footer = () => {
  return (
    <footer className="shadow-sm dark:bg-gray-900 overflow-hidden pt-10 px-5">
      <div className="max-w-screen-xl md:py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <span className="flex items-center mb-4 rtl:space-x-reverse sm:mb-0 space-x-3">
              <img
                src={logoWeb}
                className="h-10 mt-1"
                alt="AutoIconiche logo"
              />
              <span className="text-2xl dark:text-white font-semibold self-center whitespace-nowrap">
                AutoIconiche
              </span>
            </span>
          </Link>
          <ul className="flex flex-wrap text-gray-500 text-sm dark:text-gray-400 font-medium items-center mb-6 sm:mb-0 gap-5">
            <li>
              <a href="https://github.com/Francesco-Napolitano/auto-collection-FE">
                <img
                  className="w-6 h-6 dark:invert"
                  loading="lazy"
                  src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                  alt="GitHub"
                />
              </a>
            </li>
            <li>
              <span className="hover:underline ">
                <Link to="/common/about">About</Link>
              </span>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Torna su
              </a>
            </li>
            <li>
              <span href="#" className="hover:underline">
                <Link to="/common/about">Contact</Link>
              </span>
            </li>
          </ul>
        </div>
        <hr className="border-gray-200 dark:border-gray-700 lg:my-8 my-6 sm:mx-auto" />
        <span className="text-gray-500 text-sm block dark:text-gray-400 sm:text-center pb-2">
          © 2025{' '}
          <a href="#" className="hover:underline">
            AutoIconiche™
          </a>
          . Tutti i diritti riservati.
        </span>
      </div>
    </footer>
  )
}

export default Footer
