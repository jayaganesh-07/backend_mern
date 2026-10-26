import React from 'react'
import UserContext from './UserContext'

const UserProvider = ({children}) => {

    const user = {
name: "Bala",
role: "Developer"
};




  return (
<>
<UserContext value={user}>

{children}

</UserContext>
</>  )
}

export default UserProvider