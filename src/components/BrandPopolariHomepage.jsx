import Mercedes2 from '../assets/mercedes2.avif'
import Ferrari2 from '../assets/ferrari2.webp'
import Porsche2 from '../assets/Porsche2.png'
import { Link } from 'react-router-dom'

const BrandPopolariHomepage = () => {
  return (
    <section className="flex flex-col items-center justify-center py-15 px-10 ">
      <h2 className="color-website mb-15 !text-[45px]">I brand più popolari</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-10 ">
        <div className="bg-white border transition duration-300 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
          <Link to={'/brand/1'} className="flex items-center justify-center">
            <img src={Ferrari2} className="w-1/2" alt="ferrari logo" />
          </Link>
        </div>
        <div className="  bg-white border transition duration-300 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
          <Link to={'/brand/3'}>
            <img src={Porsche2} alt="porsche logo" className="mx-auto w-1/2 " />
          </Link>
        </div>
        <div className="max-lg:h-90 bg-white border transition duration-300 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
          <Link to={'/brand/10'}>
            <img
              src={Mercedes2}
              alt="mercedes logo"
              className="w-1/2 mx-auto "
            />
          </Link>
        </div>
        <div className=" bg-white border transition duration-300 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
          <Link to={'/brand/5'}>
            <img
              src="https://images.unsplash.com/photo-1728416798637-0131ce8458b4?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="bugatti logo"
              className="w-1/2 mx-auto"
            />
          </Link>
        </div>
      </div>
      <div className="mt-10 lg:mt-5">
        <Link className="hover" to="/brand">
          <button
            type="button"
            className="focus:outline-none text-gray-200 !bg-[#22881b] !font-bold rounded-lg text-sm px-5 py-2.5 mt-7 !shadow-md"
          >
            Esplora tutti i brand
          </button>
        </Link>
      </div>
    </section>
  )
}

export default BrandPopolariHomepage
