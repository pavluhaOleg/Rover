import React, { useState, FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import n from './Navigation.module.css'


const Navigation = () => {

  const [elemNav, setElemNav] = useState([
    { id: 1, path: '/cars', text: 'АВТОМОБИЛИ', active: false },
    { id: 2, path: '/owners', text: 'ВЛАДЕЛЬЦАМ', active: false },
    { id: 3, path: '/brand', text: 'О БРЕНДЕ', active: false },

  ])

  const addActive = (id: number) => {
    const newArr = elemNav.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setElemNav(newArr)
  }

  return (
    <ul className={n.block}>
      {elemNav.map(item =>
        <li key={item.id}
          style={{ background: item.active ? '#e9ecec' : '' }}
          onClick={() => addActive(item.id)}>
          <Link className={n.linkNav} to={item.path}>{item.text}</Link>
        </li>
      )}


    </ul>
  )
}

export default Navigation