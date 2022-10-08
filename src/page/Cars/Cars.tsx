import React, { useState, FC, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import CarNavBlok from './CarNavBlok/CarNavBlok'
import c from './Cars.module.css'
import { Context } from '../../context/Context'


const Cars = () => {
  const { carsShow, setCarsShow } = useContext(Context)

  return (

    <div className={c.wrapper}>                                         
      <div className={carsShow ? `${c.wrappAnimateBlock} ${c.active}` // динамическая страница
        :
        `${c.wrappAnimateBlock} ${c.none}`}>
        <CarNavBlok setCarsShow={setCarsShow} />   // навигация
      </div>
    </div>
  )
}

export default Cars