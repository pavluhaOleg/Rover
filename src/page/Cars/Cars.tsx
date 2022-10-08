import React, { useState, FC, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import CarNavFixedBlok from './CarNavFixedBlok/CarNavFixedBlok'
import c from './Cars.module.css'
import { Context } from '../../context/Context'


const Cars = () => {
  const { carsShow, setCarsShow } = useContext(Context)

  return (

    <div className={c.wrapper}>
      <div className={carsShow ? `${c.wrappAnimateBlock} ${c.active}`
        :
        `${c.wrappAnimateBlock} ${c.none}`}>
        <CarNavFixedBlok setCarsShow={setCarsShow} />
      </div>
    </div>
  )
}

export default Cars