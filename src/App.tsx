import React, { FC, useEffect, useState } from 'react'
import app from './App.module.css'


import { IUser } from './types/types'
import Header from './components/Header/Header'
import Home from './page/Home/Home'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/FooterBottom/FooterBottom'
import { Route, Routes } from 'react-router-dom'
import Cars from './page/Cars/Cars'
import Owners from './page/Owners/Owners'
import Brand from './page/Brand/Brand'
import { Context } from './context/Context'

const App = () => {
  const [carsShow, setCarsShow] = useState(false)

  return (
    <Context.Provider value={{ carsShow, setCarsShow}}>
      <div className={app.wrapper}>

        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/owners' element={<Owners />} />
          <Route path='/brand' element={<Brand />} />
        </Routes>
        <Footer />
        <FooterBottom />
      </div>
    </Context.Provider>
  )
}

export default App