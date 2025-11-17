import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Products from './pages/Products'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar></Navbar>

    <Routes>
            <Route path="/" element={<Home></Home>} />
       
            <Route path="/login" element={<Login></Login>} />
            <Route path="/products" element={<Products></Products>} />
      
          
           
          </Routes>
<Footer></Footer>
    </>
  )
}

export default App
