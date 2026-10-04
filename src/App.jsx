import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import AuthProvider, { AuthContext } from './Context/AuthProvider'


const App = () => {

  const authData = useContext(AuthContext)
  const [user, setUser] = useState(null);


  const loginHandel = (email, password) => {
    if (email == 'admin@gmail.com' && password == '123') {
      setUser('admin')
    }
    else if (authData && authData?.employees.find((e)=>email == e.email && password == e.password)) {
      setUser('employee')
    }
    else {
      alert("invalid Credentials")
    }
  }



  return (
    <>
      {!user ? (
        <Login loginHandel={loginHandel} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  )
}

export default App