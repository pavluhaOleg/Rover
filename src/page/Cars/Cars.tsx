import React, { useState, FC, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import CarNavBlok from './CarNavBlok/CarNavBlok'
import c from './Cars.module.css'
import { Context } from '../../context/Context'
import CarContentModel from '../../components/CarContentModel/CarContentModel'


const Cars = () => {
  const { carsShow, setCarsShow } = useContext(Context)


  window.scrollTo(0, 0);
  return (

    <div className={c.wrapper}>                                         
      <div className={carsShow ? `${c.wrappAnimateBlock} ${c.active}` // динамическая страница Cars
        :
        `${c.wrappAnimateBlock} ${c.none}`}>
        <CarNavBlok setCarsShow={setCarsShow} />  
        <CarContentModel />
      </div>
     
    </div>
  )
}

export default Cars