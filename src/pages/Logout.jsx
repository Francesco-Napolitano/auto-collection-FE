import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Logout = () => {
  //creando questa costante sto richiamando la funzione logout da AuthContext
  const { logout } = useContext(AuthContext)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 pt-20 md:pt-0 ">
      <div className="p-15 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center">
        <h1 className="!text-4xl dark:text-gray-200">
          Sei sicuro di voler effettuare il logout?
        </h1>
        <button
          className="px-6 py-3  bg-black !font-semibold text-[#22881B] hover:bg-red-600 hover:text-red-500 rounded-lg mt-5"
          onClick={() => {
            logout()
            alert('Logout effettuato con successo')
            window.location.href = '/'
          }}
        >
          Disconnetti
        </button>
      </div>
    </div>
  )
}

export default Logout
