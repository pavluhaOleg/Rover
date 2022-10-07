import React, { FC, useState } from 'react'
import nh from './NavigationHomeHeader.module.css'
import ItemNavigationHomeHeader from './ItemNavigationHomeHeader/ItemNavigationHomeHeader'

interface INavHomeHeader {
  id: number,
  link: string,
  text: string,
  icon: string
}

const NavigationHomeHeader = () => {

  const [navHeader, setNavHeader] = useState<INavHomeHeader[]>([
    { id: 1, icon: 'fa fa-car', link: 'конфигуратор', text: 'Создайте Ваш идеальный Land Rover с помощью конфигуратора' },
    { id: 2, icon: 'fa fa-braille', link: 'сравните наши автомобили', text: 'Выберите до трёх автомобилей и сравните их по всем параметрам' },
    { id: 3, icon: 'fa fa-picture-o', link: 'скачать брошуру', text: 'Узнать больше об автомобилях Lend Rover' },
    { id: 4, icon: 'fa fa-map-marker', link: 'найти дилера', text: 'Найти ближайшего к Вам дилера Land Rover' },
  ])

  return (
    <ul className={nh.continer}>{
      navHeader.map(elem =>
      <ItemNavigationHomeHeader key={elem.id} {...elem} />
    )
    }
    </ul>
  )
}

export default NavigationHomeHeader