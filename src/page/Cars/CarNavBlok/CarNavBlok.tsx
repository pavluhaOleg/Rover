import React, { useState, FC } from 'react'
import { BsXLg } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import cfb from './CarNavBlok.module.css'
import ItemCarNav from './ItemCarNav/ItemCarNav'

interface ICarsNav {
  id: number,
  link: string,
}

interface ICarsProps {
  setCarsShow: any;
}

const CarNavFixedBlok: FC<ICarsProps> = ({ setCarsShow }) => {
  const [toogleNav, setToggleNav] = useState(true)

  const [elemCars, setElemCars] = useState<ICarsNav[]>([     // массив навигация
    { id: 1, link: 'автомобили' },
    { id: 2, link: 'sv' },
  ])

  const hideNavigationCars = () => {    //Событие - спрятать навигацию, кнопка " X "
    setCarsShow(false);                 // убрать динамическую стр. Car
    setToggleNav(!toogleNav);           // убрать навигацию
  }

  return (                 // навигация
    <div className={toogleNav ? `${cfb.navBlock} ${cfb.active}` : cfb.navBlock}>
      <div className={cfb.navMenu}>
        {elemCars.map(elem =>
          <ItemCarNav key={elem.id} {...elem} /> // елемент навигации
        )
        }
      </div>

      <Link to="/">
        <div
          onClick={hideNavigationCars}  // кнопка " Х ", спрятать навигацию 
          className={cfb.cnpHide}><BsXLg /></div>
      </Link>
    </div>
  )
}

export default CarNavFixedBlok