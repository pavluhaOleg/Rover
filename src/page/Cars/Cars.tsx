import React, { useState, FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import CarNavFixedBlok from './CarNavFixedBlok/CarNavFixedBlok'
import c from './Cars.module.css'

interface ICars {
  carsShow: boolean;
  setCarsShow: any;
}

const Cars: FC<ICars> = ({ carsShow, setCarsShow }) => {
  const [wrapper, setWrapper] = useState(true)

  return (

    <div className={c.wrapper}>
      <div className={carsShow ? `${c.wrappAnimateBlock} ${c.active}`
        :
        `${c.wrappAnimateBlock}${c.none}`}>
        <CarNavFixedBlok setCarsShow={setCarsShow} carsShow={carsShow} />
      </div>
    </div>
  )
}

export default Cars