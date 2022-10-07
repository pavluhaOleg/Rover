import React, { useState , FC} from 'react'
import { NavLink } from 'react-router-dom'
import n from './Navigation.module.css'

interface INavigation {
  setCarsShow: any;
  carsShow: boolean;
}

const Navigation: FC<INavigation>= ({ setCarsShow, carsShow }) => {

  const toogleCnp = () => {
    setCarsShow(!carsShow)
  }

  return (
    <ul className={n.block}>
      <li onClick={toogleCnp}><NavLink className={n.linkNav} to='/cars'>АВТОМОБИЛИ</NavLink></li>
      <li onClick={toogleCnp}><NavLink className={n.linkNav} to='/owners'>ВЛАДЕЛЬЦАМ</NavLink></li>
      <li onClick={toogleCnp}><NavLink className={n.linkNav} to='/brand'>О БРЕНДЕ</NavLink></li>
    </ul>
  )
}

export default Navigation