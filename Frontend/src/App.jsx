
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useContext } from 'react'
import AuthContext from './context/authContext'

function App() {
  const {authUser} = useContext(AuthContext)
  return (
    <div className='flex items-center justify-center h-screen'>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to="/login"/> }/>
        <Route path='/login' element={authUser ? <Navigate to="/"/> : <Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to="/"/> : <Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
