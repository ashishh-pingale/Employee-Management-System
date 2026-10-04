import React, { useEffect } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'

const App = () => {
  
  const loginHandel = (email,password)=>{
    if(email == 'admin@gmail.com' && password == '123'){
      console.log('admin login')
    }
   else if(email == 'user@gmail.com' && password == '123'){
      console.log('user login')
    }
    else{
      alert("invalid Credentials")
    }
  }

  return (
    <>
    <Login loginHandel={loginHandel} />
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App