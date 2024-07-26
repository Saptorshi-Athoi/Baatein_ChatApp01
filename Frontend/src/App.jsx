
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
