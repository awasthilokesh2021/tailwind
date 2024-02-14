import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Policy from './components/Policy'
import "./App.css"

const App = () => {
  return (
     <>
         <Header/>
         <Routes>
          <Route path='/tailwind' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/policy' element={<Policy/>}></Route>
         </Routes>
         <Footer/>
     </>
  )
}

export default App