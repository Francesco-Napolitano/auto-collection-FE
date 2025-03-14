import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Logout = () => {
  //scrivendo così sto prendendo il logout che viene scritto in value nel provider di AuthContext, sto dunque richiamando la funzione logout
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
