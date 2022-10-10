import React, { useState } from 'react'
import cc from './CarContentModel.module.css'

import nav_1 from '../../img/nav-car-1.png'
import nav_2 from '../../img/nav-car-2.png'
import nav_3 from '../../img/nav-car-3.png'
import nav_4 from '../../img/nav-car-4.png'
import ItemNavigation from '../../reuseComponents/ItemNavigation/ItemNavigation'

interface ICarContentModel {
  id: number,
  img: string,
  title: string
}

const CarContentModel = () => {
  const [elemCars, setElemCars] = useState<ICarContentModel[]>([
    { id: 1, img: nav_1, title: "новый range rover" },
    { id: 2, img: nav_2, title: "новый range rover sport" },
    { id: 3, img: nav_3, title: "range rover velar" },
    { id: 4, img: nav_4, title: "range rover evoque" },
  ])

  return (
    <div className={cc.wrapper}>
      <div className={cc.navigation}>
        <h4 className={cc.title}>СЕМЕЙСТВО RANGE ROVER</h4>
        <ul>
          {elemCars.map(elem =>
            <ItemNavigation key={elem.id} {...elem} />
          )}
        </ul>
      </div>

      <div className={cc.blockWindow}>
        <div className={cc.blockImg}>
          <img src={""} />
        </div>
      </div>
    </div>
  )
}

export default CarContentModel