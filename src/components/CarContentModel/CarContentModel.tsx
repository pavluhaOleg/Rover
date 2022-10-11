import React, { useState } from 'react'
import cc from './CarContentModel.module.css'
import { GrCatalog } from "react-icons/gr";

import rov_1 from '../../img/nav-car-1.png'
import rov_2 from '../../img/nav-car-2.png'
import rov_3 from '../../img/nav-car-3.png'
import rov_4 from '../../img/nav-car-4.png'

import discov_1 from '../../img/img_model_5.png'
import discov_2 from '../../img/img_model_6.png'

import defender_1 from '../../img/img_model_7.png'


import ItemNavigation from '../../reuseComponents/ItemNavigation/ItemNavigation'

interface ICarContentModel {
  id: number,
  img: string,
  title: string
}

const CarContentModel = () => {
  const [familyRover, setFamilyRover] = useState<ICarContentModel[]>([
    { id: 1, img: rov_1, title: "новый range rover" },
    { id: 2, img: rov_2, title: "новый range rover sport" },
    { id: 3, img: rov_3, title: "range rover velar" },
    { id: 4, img: rov_4, title: "range rover evoque" },
  ])
  const [familyDiscovery, setFamilyDiscovery] = useState<ICarContentModel[]>([
    { id: 1, img: discov_1, title: "discovery" },
    { id: 2, img: discov_2, title: "discovery sport" }
  ])
  const [familyDefender, setFamilyDefender] = useState<ICarContentModel[]>([
    { id: 1, img: defender_1, title: "defender" },
  ])

  return (
    <div className={cc.wrapper}>
      <div>
          <h4 className={cc.title}>СЕМЕЙСТВО RANGE ROVER</h4>
          <ul>
            {familyRover.map(elem =>
              <ItemNavigation key={elem.id} {...elem} />
            )}
          </ul>

        <h4 className={cc.title}>СЕМЕЙСТВО DISCOVERY</h4>
        <ul>
          {familyDiscovery.map(elem =>
            <ItemNavigation key={elem.id} {...elem} />
          )}
        </ul>

        <h4 className={cc.title}>СЕМЕЙСТВО DEFENDER</h4>
        <ul>
          {familyDefender.map(elem =>
            <ItemNavigation key={elem.id} {...elem} />
          )}
        </ul>
        <div className={cc.cnp_comparison}>
          <span><GrCatalog/></span><h4>сравнение</h4>
          </div>
      </div>

      {/* block Window */}
      <div className={cc.blockWindow}>


        {/* блок фото */}
        <div className={cc.blockImg}> 
          <img src={""} />
        </div>
      </div>
    </div>
  )
}

export default CarContentModel