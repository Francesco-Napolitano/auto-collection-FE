import Porsche from '../assets/Logo_della_Porsche.svg.png'
import Mercedes from '../assets/Mercedes-Logo.svg.png'
import Bugatti from '../assets/Bugatti_Logo.png'
import FerrariSvg from '../utils/FerrariSvg'
import { Link } from 'react-router-dom'

const BrandPopolariHomepage = () => {
  return (
    <section className="flex flex-col items-center justify-center py-15 px-10 ">
      <h2 className="color-website mb-15 !text-[45px]">I brand più popolari</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-10 ">
        <div className=" bg-white border transition duration-300 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10">
          <Link to={'/brand/1'} className="flex items-center justify-center">
            <FerrariSvg height={300} />
          </Link>
        </div>
        <div className="  bg-white border transition duration-300 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
          <Link to={'/brand/3'}>
            <img src={Porsche} alt="porsche logo" className="mx-auto w-1/2 " />
          </Link>
        </div>
        <div className="max-lg:h-90 bg-white border transition duration-300 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
          <Link to={'/brand/10'}>
            <img
              src={Mercedes}
              alt="mercedes logo"
              className="w-1/2 mx-auto "
            />
          </Link>
        </div>
        <div className=" bg-white border transition duration-300 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 py-10 flex items-center justify-center">
          <Link to={'/brand/5'}>
            <img src={Bugatti} alt="bugatti logo" className="w-5/6 mx-auto" />
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
