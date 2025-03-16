import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Logout = () => {
  //creando questa costante sto richiamando la funzione logout da AuthContext
  const { logout } = useContext(AuthContext)

  return (
    <div>
      <button
        onClick={() => {
          logout()
          alert('Logout effettuato con successo')
        }}
      >
        Effettua il Logout
      </button>
    </div>
  )
}

export default Logout
