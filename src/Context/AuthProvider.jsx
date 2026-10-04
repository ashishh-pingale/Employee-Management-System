import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  
  const [userdata , setUserdata] = useState(null)

  useEffect(()=>{
    const {employees,admins} = getLocalStorage()
    setUserdata({employees,admins})
  },[])

  return (
    <div>
        <AuthContext.Provider value={userdata}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider