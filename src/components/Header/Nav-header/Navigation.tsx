import React, { useState, FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import n from './Navigation.module.css'


const Navigation = () => {

  return (
    <ul className={n.block}>
      <li><Link className={n.linkNav} to='/cars'>АВТОМОБИЛИ</Link></li>
      <li><Link className={n.linkNav} to='/owners'>ВЛАДЕЛЬЦАМ</Link></li>
      <li><Link className={n.linkNav} to='/brand'>О БРЕНДЕ</Link></li>
    </ul>
  )
}

export default Navigation