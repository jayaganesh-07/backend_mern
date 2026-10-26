import React from 'react'
import { useContext } from 'react'
import UserContext from './Components/UserContext'

const App = () => {

  const user =useContext(UserContext)
  return (

    <>
    <h1>{user.name}</h1>
    <h1>{user.role}</h1>
    
    </>
   
  )
}

export default App